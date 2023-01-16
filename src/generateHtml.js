const generateHtml = (teamArr) => {
    let newContainer = '';
    let teamContainer = [];
    for (let i = 1; i < teamArr.length; i++) {
        switch (teamArr[i].getRole()) {
            case 'Engineer':
                newContainer += `
            return
            <div class="card border-grey mb-3 shadow p-3 mb-5 bg-white rounded" style="max-width: 20rem;">
        <div class="card-header" style="height: 100px; text-align: center; font-size: 40px;">
            <div>${teamArr[i].name}</div>
            <div>${teamArr[i].getRole()} 🧑🏻‍💻</div>
            
            </div>
        <div class="card-body text-dark">
            <h5 class="card-title">ID: ${teamArr[i].id}</h5><br>
            <h5 class="card-title"><span><a href="mailto:${teamArr[i].email}">Email: ${teamArr[i].email}</a></span></h5><br>
            <h5 class="card-title">GitHub:<span><a href="https://github.com/${teamArr[i].gitHub}"></a></span></h5><br>

        </div>
    </div>`;

                teamContainer.push(newContainer)
                break;

            case 'Intern':
                newContainer += `
                    
                    return
            <div class="card border-grey mb-3 shadow p-3 mb-5 bg-white rounded" style="max-width: 20rem;">
        <div class="card-header" style="height: 100px; text-align: center; font-size: 40px;">
            <div>${teamArr[i].name}</div>
            <div>${teamArr[i].getRole()} 🧑🏻‍💻</div>
            
            </div>
        <div class="card-body text-dark">
            <h5 class="card-title">ID: ${teamArr[i].id}</h5><br>
            <h5 class="card-title"><span><a href="mailto:${teamArr[i].email}">Email: ${teamArr[i].email}</a></span></h5><br>
            <h5 class="card-title">school: ${teamArr[i].school}"></h5><br>

        </div>
    </div>`;
                teamContainer.push(newContainer)
                break;
        }
    };

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
    <div class="card border-grey mb-3 shadow p-3 mb-5 bg-white rounded" style="max-width: 20rem;">
        <div class="card-header" style="height: 100px; text-align: center; font-size: 40px;">
            <div>${teamArr[0].name}</div>
            <div>Manager 👨🏼‍💼</div>

        </div>
        <div class="card-body text-dark">
            <h5 class="card-title">ID: ${teamArr[0].id}</h5><br>
            <h5 class="card-title"><span><a href="mailto:${teamArr[0].email}">Email: ${teamArr[0].email}</a></span></h5>
            <br>
            <h5 class="card-title">office number: ${teamArr[0].officeNumber}"></a></span></h5><br>

        </div>
    </div>
    ${teamContainer}

</body>

</html>`

}

module.exports = generateHtml;
