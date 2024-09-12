function update() {
    const co = parseFloat(document.getElementById('co').value) || 0;
    const li = parseFloat(document.getElementById('li').value) || 0;
    const mn = parseFloat(document.getElementById('mn').value) || 0;
    const ni = parseFloat(document.getElementById('ni').value) || 0;
    const colorOutput = document.getElementById('colorOutput');
    const info =document.getElementById('info');
    const name=document.getElementById("name");
    const properties=document.getElementById("properties");
    const conc=document.getElementById("concentration");
    const uses=document.getElementById("uses");
 
    if(co==1 && li==2 && mn==3.3  && ni==4){
        info.innerText="asdasdadsnahjdkJANDguwndguls dlusgdsfsfsfsfsbfnksdfasd aksda;sknda sdusdsdnfsfdysf lsdflsnfluisnaygdnaysfgyuagfsaflufluasf";
        name.innerText="Name: "+"ABC";
        properties.innerText="Name: "+"GHI";
        conc.innerText="Concentration: "+"DEF";
        uses.innerText="Uses: "+"A,N,A,W";
    }
    else if(co==4 && li==12 && mn==3.3  && ni==4.43){
        info.innerText="asdasdadsnahjdkJANDguwndguls dlusgdsfsfsfsfsbfnksdfasd aksda;sknda sdusdsdnfsfdysf lsdflsnfluisnaygdnaysfgyuagfsaflufluasf";
        name.innerText="Name: "+"abc";
        properties.innerText="properties: "+"ghi";
        conc.innerText="Concentration: "+"def";
        uses.innerText="Uses: "+"a,n,a,w";
    }
   
}
