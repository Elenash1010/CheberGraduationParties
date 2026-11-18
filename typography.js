'use strict';
// Keep Russian prepositions and short conjunctions with the following word.
function preventHangingWords(root=document.body){
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{
    acceptNode(node){return node.parentElement?.closest('script,style,svg,textarea,pre,code')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT;}
  });
  const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  const shortWords=/(^|[\s\u00a0])(а|и|или|но|в|во|на|к|ко|с|со|у|о|об|обо|от|до|по|из|за|для|при|без|под|над|про|не|ни)[ \t\r\n]+(?=\S)/giu;
  for(const node of nodes){let text=node.nodeValue;for(let i=0;i<3;i++)text=text.replace(shortWords,'$1$2\u00a0');node.nodeValue=text;}
}
preventHangingWords();
const dialogContent=document.getElementById('dialog-content');
if(dialogContent)new MutationObserver(()=>preventHangingWords(dialogContent)).observe(dialogContent,{childList:true,subtree:true});
