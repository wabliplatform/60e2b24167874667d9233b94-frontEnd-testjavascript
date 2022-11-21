let apiWabliApi = new TempApi.WabliApi();import TempApi from '../src/index';window.onload = () => {apiWabliApi.getAllwabli((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i7gwk").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'wimage']");
if(insideSubDataElement !== null && data[data.length -i -1].wimage !== undefined){
  insideSubDataElement.src = data[data.length -i -1].wimage.data;
  insideSubDataElement.name = data[data.length -i -1].wimage.name;
}
else if(subDataElements[i].getAttribute('annotationname') === 'wimage' && data[data.length -i -1].wimage !== undefined){
  subDataElements[i].src = data[data.length -i -1].wimage.data;
  subDataElements[i].name = data[data.length -i -1].wimage.name;
}
 } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'wtitle']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].wtitle;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'wtitle'){
        subDataElements[i].textContent = data[data.length -i -1].wtitle;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};