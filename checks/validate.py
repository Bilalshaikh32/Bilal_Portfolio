"""Static quality checks. Requires Python 3, plus Node.js to validate JS syntax."""
from pathlib import Path
from html.parser import HTMLParser
from collections import Counter
import re, subprocess, sys, json
ROOT=Path(__file__).resolve().parent.parent
html=(ROOT/'index.html').read_text(encoding='utf-8')
class Inspector(HTMLParser):
 def __init__(self):
  super().__init__();self.ids=[];self.hrefs=[];self.sources=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if a.get('id'):self.ids.append(a['id'])
  if a.get('href'):self.hrefs.append(a['href'])
  if a.get('src'):self.sources.append(a['src'])
p=Inspector();p.feed(html)
errors=[]
for name,n in Counter(p.ids).items():
 if n>1:errors.append('Duplicate id: '+name)
for h in p.hrefs:
 if h.startswith('#') and h[1:] not in p.ids:errors.append('Missing anchor: '+h)
 if not h.startswith(('http:', 'https:', 'mailto:', '#', 'tel:', 'data:')) and not (ROOT/h.split('?')[0]).is_file():errors.append('Missing href asset: '+h)
for s in p.sources:
 if not s.startswith(('http:', 'https:', 'data:')) and not (ROOT/s.split('?')[0]).is_file():errors.append('Missing src asset: '+s)
for anchor in ['home','about','skills','projects','services','contact']:
 if anchor not in p.ids:errors.append('Missing required section '+anchor)
for required in ['assets/Sheikh_Muhammad_Bilal_Resume.pdf','assets/bilal-portrait.webp','assets/portfolio-preview.webp','css/styles.css','js/main.js','js/data.js','README.md']:
 if not (ROOT/required).is_file():errors.append('Missing file: '+required)
if (ROOT/'assets/Sheikh_Muhammad_Bilal_Resume.pdf').read_bytes()[:4]!=b'%PDF':errors.append('Resume is not a PDF')
for f in ['js/data.js','js/main.js']:
 r=subprocess.run(['node','--check',str(ROOT/f)],capture_output=True,text=True)
 if r.returncode:errors.append(f+' syntax error: '+r.stderr)
# data.js uses a window global; run in Node VM without access to the network or filesystem.
r=subprocess.run(['node','-e',r'''const vm=require('vm'),fs=require('fs');let ctx={window:{}};vm.runInNewContext(fs.readFileSync(process.argv[1],'utf8'),ctx);const d=ctx.window.PORTFOLIO_DATA;if(d.projects.length!==5||d.projects.filter(x=>x.featured).length!==3||d.skills.length!==3||d.services.length!==4)process.exit(2);for(const p of d.projects){for(const key of ['challenge','implementation','technical','evidence','limitations','flow'])if(!p[key])process.exit(3);if(p.repository&&!/^https:\/\//.test(p.repository))process.exit(4);}console.log('content model: 5 projects / 3 featured / 3 skill tiers / 4 services');''',str(ROOT/'js/data.js')],capture_output=True,text=True)
if r.returncode:errors.append('Data content model error: '+r.stderr)
# External secrets and source archives should never ship with the portfolio.
for f in ROOT.rglob('*'):
 if f.is_file() and (f.name=='.env' or f.suffix.lower() in ('.zip','.pem','.key','.xlsx','.mp4')): errors.append('Potential private/unnecessary artifact: '+str(f.relative_to(ROOT)))
if 'og:image" content="assets/' in html:errors.append('Invalid relative Open Graph image in HTML')
print('HTML ids:',len(p.ids),'| Local/internal references:',len(p.hrefs)+len(p.sources))
print('Content model:',r.stdout.strip())
print('Resume:',(ROOT/'assets/Sheikh_Muhammad_Bilal_Resume.pdf').stat().st_size,'bytes')
print('RESULT:', 'PASS' if not errors else 'FAIL')
for e in errors:print('ERROR:',e)
sys.exit(bool(errors))
