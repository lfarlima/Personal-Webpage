const progress = document.querySelector('.progress')
const percentage = document.querySelector('.progress span')

    let per = 0;
    function progressLoad(){
        if(per>=80){
            progress.style.width = `80%`;
            percentage.innerHTML = "80%";

       }else{
            progress.style.width = `${per}%`;
            percentage.innerHTML = `${per}%`;

       }
        per++

    }
    setInterval(progressLoad,90)
    
    @media screen and (max-width:640px) {
           
            .container{
                width: 90%;
            }

            h1 {
            font-size: 50px;
            }

            i {
            font-size: 25px;
            margin: 10px;
        }
        }
        @media screen and (max-width:400px) {
            h1 {
            font-size: 30px;
            }
        }
