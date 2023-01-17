

const generateHtml = (teamArr) => {
    let newContainer = '';
    let teamContainer = [];
    for (let i = 1; i < teamArr.length; i++) {
        switch (teamArr[i].getRole()) {
            case 'Engineer':
                newContainer += `
                <div>
            <div class="card border-grey shadow bg-white rounded box" style="width: 18rem;">
        <div class="card-header" style="height: 150px; text-align: center; font-size: 30px;">
            <div id='name'>${teamArr[i].name}</div>
            <div id='role'>${teamArr[i].getRole()} 🧑🏻‍💻</div>
            
            </div>
        <div class="card-body text-dark">
            <h5 class="card-title" id="id">ID: ${teamArr[i].id}</h5><br>
            <h5 class="card-title" id="email">Email:<span><a href="mailto:${teamArr[i].email}">${teamArr[i].email}</a></span></h5><br>
            <h5 class="card-title" id="gitHub">GitHub:<span><a href="https://github.com/${teamArr[i].gitHub}" target="_blank">${teamArr[i].gitHub}</a></span></h5><br>

        </div>
        </div>
    </div>`;

                teamContainer.push(newContainer)
                break;

            case 'Intern':
                newContainer += `
                    
            <div class="ccard border-grey shadow bg-white rounded box" style="width: 18rem;">
        <div class="card-header" style="height: 150px; text-align: center; font-size: 30px;">
            <div>${teamArr[i].name}</div>
            <div>${teamArr[i].getRole()} 🧑🏻</div>
            
            </div>
        <div class="card-body text-dark">
            <h5 class="card-title">ID: ${teamArr[i].id}</h5><br>
            <h5 class="card-title">Email:<span><a href="mailto:${teamArr[i].email}">${teamArr[i].email}</a></span></h5><br>
            <h5 class="card-title">school: ${teamArr[i].school}</h5><br>

        </div>
    </div>`;
                teamContainer.push(newContainer)
                break;
        }
    };
    teamContainer.join('')


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
    <div class="container" id="card-container">
      <div class="row">
        <div class="card-area col-12 d-flex justify-content-center mt-5">
    <div class="card border-grey shadow bg-white rounded box" style="width: 18rem;">
        <div class="card-header" style="height: 150px; text-align: center; font-size: 30px;">
            <div>${teamArr[0].name}</div>
            <div>Manager 👨🏼‍💼</div>

        </div>
        <div class="card-body text-dark">
            <h5 class="card-title">ID: ${teamArr[0].id}</h5><br>
            <h5 class="card-title">Email:<span><a href="mailto:${teamArr[0].email}">${teamArr[0].email}</a></span></h5>
            <br>
            <h5 class="card-title">office number: ${teamArr[0].officeNumber}</h5><br>

        </div>
    </div>
    ${newContainer}

    </div>
    </div>
  </div>
</body>

</html>`

}


module.exports = generateHtml;
