
const fullViewBackground = document.querySelector(".full-view-background")
const fullView = document.querySelector(".full-view")

const renderApp = (id) => {
  let technology = []
  let featurelist = []
  //    fullView.style.animation = 'move .5s ease-in-out;'
  myProjects.forEach((app) => {
    if (app.id === parseInt(id)) {
      
      app.features.forEach((feature, index)=>{
          featurelist.push(`
            <li><i class="far fa-check-circle"></i>${feature}</li>
          `)
      })
      
      app.technology.forEach((tech) => {
        technology.push(`
      <div class="tech-img ${tech.imgClass}"></div>
      `)
      })
      fullViewBackground.style.background = `url(${app.img}) no-repeat center center/cover`
      fullView.innerHTML = `
            <h3 class='ttitle'>${app.title}</h3>
            <p>${app.descr}</p>
            <h3 class="feature-title">Features</h3>
            <ul class="feature-style">
            ${featurelist.join(" ")}
            </ul>
            <h3 class="technology-title" >Technoloy use</h3>
            <div class="tech-box">
               ${technology.join("")}
            </div>
            <div class="two-buttons">
            <a class="demo" href="${app.site_url}" target="_blank" > VIEW SITE</a>
            <a class="github" href="${app.github_url}" target="_blank" > GITHUB</a>
            </div>
`
    } else return null
  })
}

const preview = document.querySelector(".projects-view")
const renderSnippet = (type) => {
  if (type === "all") {
  }
  const newtype = myProjects.filter((app) => {
    if (type === "all") {
      return app
    }
    return app.type === type
  })
  const addtypes = []
  newtype.forEach((apptype) => {
    addtypes.push(`
        <div id= '${apptype.id}' class="view view${apptype.id}"></div>
        `)
  })
  preview.innerHTML = `
    <div class="target"></div>
    ${addtypes.join("")}
    `
}
