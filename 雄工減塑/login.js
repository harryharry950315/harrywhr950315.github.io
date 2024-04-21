function parseJwt (token) 
        {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            return JSON.parse(jsonPayload);
        };

        async function handleCallback(response) 
        {
            const data = parseJwt(response.credential);
            console.log(data);
            localStorage.setItem("name",data.name);
            localStorage.setItem("email",data.email);
            localStorage.setItem("sub",data.sub);
            alert(localStorage.getItem("name")+"\r\n"+localStorage.getItem("email")+"\r\n"+localStorage.getItem("sub")); //檢查
            await fetch("https://script.google.com/macros/s/AKfycbxoFCSuQPmNh4vQmoFqbikgxacyRoqOHrOI2pYauVHsqXrsrLn5I_jLvyijmqWlY1LJlQ/exec?type=reg&user="+localStorage.getItem("email")).then(function (response) {
            return response.json();
                })
            .then(function (myJson) {
                console.log(myJson);
                if(myJson.message == "success")location.href=("http://harrywhr950315.ddns.net/select");
                else location.href=("http://harrywhr950315.ddns.net/doc")
             });

        }