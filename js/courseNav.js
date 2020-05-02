    let area = document.querySelectorAll('#gs-btn');
    let btns = document.querySelectorAll('.gs-button');
    btns = Array.from(btns);
    area = Array.from(area);

    function pressed( btn ){
        area.forEach((ele,index)=>{
            if(index == btn+1){
                ele.style.zIndex ="1";
                ele.style.display="block";
                ele.style.opacity="1";
            }
            else{
                ele.style.zIndex="0";
                ele.style.display="none";
                ele.style.opacity="0";
            }
        });
        btns.forEach((ele,index)=>{
            if(index == btn+1){
                console.log();
            ele.style.background = "#1ba94c";
            ele.childNodes[index].style.color = '#ffffff';
            }else{
                ele.style.background = "none";
                ele.childNodes[index].style.color = "#39424e";
            }
        });
    }
