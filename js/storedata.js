

        function storeenglish() {

            const zoneaddress = document.getElementById("zoneaddress").value;
            const citycorporation = document.getElementById("citycorporation").value;
            const district = document.getElementById("district").value;
            const registerno = document.getElementById("registerno").value;

            const dateofissue = document.getElementById("dateofissue").value;
            const dateofregistration = document.getElementById("dateofregistration").value;
            const name = document.getElementById("name").value;
            const brnumber = document.getElementById("brnumber").value;

            const dateofbirthdate = document.getElementById("dateofbirthdate").value;
            const dateofbirthmonth = document.getElementById("dateofbirthmonth").value;
            const dateofbirthyear = document.getElementById("dateofbirthyear").value;
            const dateofbirthword = document.getElementById("dateofbirthword").value;

            const orderchild = document.getElementById("orderchild").value;
            const gender = document.getElementById("gender").value;
            const fathername = document.getElementById("fathername").value;
            const fathernid = document.getElementById("fathernid").value;

            const fatherbrn = document.getElementById("fatherbrn").value;
            const mothername = document.getElementById("mothername").value;
            const mothernid = document.getElementById("mothernid").value;
            const motherbrn = document.getElementById("motherbrn").value;

            const birthplace = document.getElementById("birthplace").value;
            const permanentaddress = document.getElementById("permanentaddress").value;

            const cityenglish = {
                zoneaddress: zoneaddress,
                citycorporation: citycorporation,
                district: district,
                registerno: registerno,

                dateofissue: dateofissue,
                dateofregistration: dateofregistration,
                name: name,
                brnumber: brnumber,

                dateofbirthword: dateofbirthword,
                dateofbirthdate: dateofbirthdate,
                dateofbirthmonth: dateofbirthmonth,
                dateofbirthyear: dateofbirthyear,

                orderchild: orderchild,
                gender: gender,
                fathername: fathername,
                fathernid: fathernid,

                fatherbrn: fatherbrn,
                mothername: mothername,
                mothernid: mothernid,
                motherbrn: motherbrn,

                birthplace: birthplace,
                permanentaddress: permanentaddress,
            }

            window.localStorage.setItem("citycorporationenglish", JSON.stringify(cityenglish));


            window.location = "english.html"
        }

        function storebangla() {
            

            const bnzoneaddress = document.getElementById("bnzoneaddress").value;
            const bncitycorporation = document.getElementById("bncitycorporation").value;
            const bndistrict = document.getElementById("bndistrict").value;
            const bnregisterno = document.getElementById("bnregisterno").value;

            const bndateofissue = document.getElementById("bndateofissue").value;
            const bndateofregistration = document.getElementById("bndateofregistration").value;
            const bnname = document.getElementById("bnname").value;
            const bnbrnumber = document.getElementById("bnbrnumber").value;

            const bndateofbirthdate = document.getElementById("bndateofbirthdate").value;
            const bndateofbirthmonth = document.getElementById("bndateofbirthmonth").value;
            const bndateofbirthyear = document.getElementById("bndateofbirthyear").value;
            const bndateofbirthword = document.getElementById("bndateofbirthword").value;

            const bnorderchild = document.getElementById("bnorderchild").value;
            const bngender = document.getElementById("bngender").value;
            const bnfathername = document.getElementById("bnfathername").value;
            const bnfathernid = document.getElementById("bnfathernid").value;

            const bnfatherbrn = document.getElementById("bnfatherbrn").value;
            const bnmothername = document.getElementById("bnmothername").value;
            const bnmothernid = document.getElementById("bnmothernid").value;
            const bnmotherbrn = document.getElementById("bnmotherbrn").value;

            const bnbirthplace = document.getElementById("bnbirthplace").value;
            const bnpermanentaddress = document.getElementById("bnpermanentaddress").value;

            const citybangla = {
                bnzoneaddress: bnzoneaddress,
                bncitycorporation: bncitycorporation,
                bndistrict: bndistrict,
                bnregisterno: bnregisterno,

                bndateofissue: bndateofissue,
                bndateofregistration: bndateofregistration,
                bnname: bnname,
                bnbrnumber: bnbrnumber,

                bndateofbirthword: bndateofbirthword,
                bndateofbirthdate: bndateofbirthdate,
                bndateofbirthmonth: bndateofbirthmonth,
                bndateofbirthyear: bndateofbirthyear,

                bnorderchild: bnorderchild,
                bngender: bngender,
                bnfathername: bnfathername,
                bnfathernid: bnfathernid,

                bnfatherbrn: bnfatherbrn,
                bnmothername: bnmothername,
                bnmothernid: bnmothernid,
                bnmotherbrn: bnmotherbrn,

                bnbirthplace: bnbirthplace,
                bnpermanentaddress: bnpermanentaddress
            }

            window.localStorage.setItem("citycorporationbangla", JSON.stringify(citybangla));

            window.location = "bangla.html"
        }


        function storeupozilaenglish() {

            const upzoneaddress = document.getElementById("upzoneaddress");
            const upcitycorporation = document.getElementById("upcitycorporation");
            const updistrict = document.getElementById("updistrict");


            const upregisterno = document.getElementById("upregisterno");
            const updateofissue = document.getElementById("updateofissue");
            const updateofregistration = document.getElementById("updateofregistration");

            const upname = document.getElementById("upname");
            const upbrnumber = document.getElementById("upbrnumber");
            const updateofbirthdate = document.getElementById("updateofbirthdate");
            const updateofbirthmonth = document.getElementById("updateofbirthmonth");
            const updateofbirthyear = document.getElementById("updateofbirthyear");

            const updateofbirthword = document.getElementById("updateofbirthword");
            const uporderchild = document.getElementById("uporderchild");
            const upgender = document.getElementById("upgender");

            const upfathername = document.getElementById("upfathername");
            const upfathernid = document.getElementById("upfathernid");
            const upfatherbrn = document.getElementById("upfatherbrn");

            const upmothername = document.getElementById("upmothername");
            const upmothernid = document.getElementById("upmothernid");
            const upmotherbrn = document.getElementById("upmotherbrn");

            const upbirthplace = document.getElementById("upbirthplace");
            const uppermanentaddress = document.getElementById("uppermanentaddress");



            const upozilaenglish = {
                upzoneaddress: upzoneaddress,
                upcitycorporation: upcitycorporation,
                updistrict: updistrict,
                bnregistupregisternoerno: upregisterno,

                updateofissue: updateofissue,
                updateofregistration: updateofregistration,
                upname: upname,
                upbrnumber: upbrnumber,

                updateofbirthword: updateofbirthword,
                updateofbirthdate: updateofbirthdate,
                updateofbirthmonth: updateofbirthmonth,
                updateofbirthyear: updateofbirthyear,

                uporderchild: uporderchild,
                upgender: upgender,
                upfathername: upfathername,
                upfathernid: upfathernid,

                upfatherbrn: upfatherbrn,
                upmothername: upmothername,
                upmothernid: upmothernid,
                upmotherbrn: upmotherbrn,

                upbirthplace: upbirthplace,
                uppermanentaddress: uppermanentaddress
            }

            window.localStorage.setItem("upozilaenglish", JSON.stringify(upozilaenglish));

            window.location = "upozilaenglish.html"
        }


        function storeupozilabangla() {

            const upbnzoneaddress = document.getElementById("upbnzoneaddress");
            const upbncitycorporation = document.getElementById("upbncitycorporation");
            const upbndistrict = document.getElementById("upbndistrict");


            const upbnregisterno = document.getElementById("upbnregisterno");
            const upbndateofissue = document.getElementById("upbndateofissue");
            const upbndateofregistration = document.getElementById("upbndateofregistration");

            const upbnname = document.getElementById("upbnname");
            const upbnbrnumber = document.getElementById("upbnbrnumber");
            const upbndateofbirthdate = document.getElementById("upbndateofbirthdate");
            const upbndateofbirthmonth = document.getElementById("upbndateofbirthmonth");
            const upbndateofbirthyear = document.getElementById("upbndateofbirthyear");

            const upbndateofbirthword = document.getElementById("upbndateofbirthword");
            const upbnorderchild = document.getElementById("upbnorderchild");
            const upbngender = document.getElementById("upbngender");

            const upbnfathername = document.getElementById("upbnfathername");
            const upbnfathernid = document.getElementById("upbnfathernid");
            const upbnfatherbrn = document.getElementById("upbnfatherbrn");

            const upbnmothername = document.getElementById("upbnmothername");
            const upbnmothernid = document.getElementById("upbnmothernid");
            const upbnmotherbrn = document.getElementById("upbnmotherbrn");

            const upbnbirthplace = document.getElementById("upbnbirthplace");
            const upbnpermanentaddress = document.getElementById("upbnpermanentaddress");

            const upozilabangla = {
                upbnzoneaddress: upbnzoneaddress,
                upbncitycorporation: upbncitycorporation,
                upbndistrict: upbndistrict,
                upbnregisterno: upbnregisterno,

                upbndateofissue: upbndateofissue,
                upbndateofregistration: upbndateofregistration,
                upbnname: upbnname,
                upbnbrnumber: upbnbrnumber,

                upbndateofbirthword: upbndateofbirthword,
                upbndateofbirthdate: upbndateofbirthdate,
                upbndateofbirthmonth: upbndateofbirthmonth,
                upbndateofbirthyear: upbndateofbirthyear,

                upbnorderchild: upbnorderchild,
                upbngender: upbngender,
                upbnfathername: upbnfathername,
                upbnfathernid: upbnfathernid,

                upbnfatherbrn: upbnfatherbrn,
                upbnmothername: upbnmothername,
                upbnmothernid: upbnmothernid,
                upbnmotherbrn: upbnmotherbrn,

                upbnbirthplace: upbnbirthplace,
                upbnpermanentaddress: upbnpermanentaddress
            }

            window.localStorage.setItem("upozilabangla", JSON.stringify(upozilabangla));

            window.location = "upozilabangla.html"
        }
