// Navigatio smooth selector
const allLinks = document.querySelectorAll(".link")
const navLink = document.querySelector(".nav-links")
const navSelector = document.querySelector(".nav-selector")
const contactBtn = document.querySelector("#contact-btn")
const formFields = document.querySelectorAll("#form input, textarea")
const errorMsg = document.querySelector("#error-msg")
const log = console.log

contactBtn.addEventListener("click", (e) => {
  e.preventDefault()
  clearErrorField(formFields)
  const data = {}
  let Err = false
  formFields.forEach((field) => {
    if (field.id !== "phone" && field.value === "") {
      field.style.border = "1px solid red"
      errorMsg.style.color = "red"
      errorMsg.innerHTML = "Please fill all required fields"
      Err = true
      return Err
    } else if (field.id === "message" && field.value === "") {
      field.style.border = "1px solid red"
      errorMsg.style.color = "red"
      errorMsg.innerHTML = "Please fill all required fields"
      Err = true
      return Err
    }
  })
  if (!Err) {
    formFields.forEach((field) => {
      if (field.id === "name") data.name = field.value.trim()
      if (field.id === "phone") data.phone = field.value.trim()
      if (field.id === "company") data.company = field.value.trim()
      if (field.id === "email") data.email = field.value.trim()
      if (field.id === "message") data.message = field.value.trim()
    })
    sendData(data)
  }
})

function sendData(data) {
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }
  contactBtn.innerHTML = "Sending Message..."
  fetch("/email", config)
    .then((res) => {
      if (res.status === 200) {
        errorMsg.style.color = "green"
        errorMsg.innerHTML = "Message sent! Thank You."
        contactBtn.innerHTML = "SUBMIT"
        formFields.forEach((field) => {
          field.value = ""
        })
        setTimeout(() => {
          errorMsg.innerHTML = ""
        }, 5000)
      }
      if (res.status === 400) {
        errorMsg.style.color = "red"
        errorMsg.innerHTML = "Oops! Something went wrong on our end. Please try again later or call."
        contactBtn.innerHTML = "SUBMIT"
        formFields.forEach((field) => {
          field.value = ""
        })
        setTimeout(() => {
          errorMsg.innerHTML = ""
        }, 5000)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

function clearErrorField(formfield) {
  formfield.forEach((field) => {
    field.style.border = ""
    errorMsg.style.color = ""
    errorMsg.innerHTML = ""
  })
}

navLink.addEventListener("click", (e) => {
  const nodeName = e.target.nodeName
  const nodevalue = e.target.innerText

  if (nodeName === "LI") {
    allLinks.forEach((link, index) => {
      if (link.innerHTML === nodevalue) {
        navSelector.style.transform = `translateX(${(65 + 12) * index}px)`
        navSelector.style.transition = `all .3s ease-in-out`
      }
    })
  }
})

//menu drop
const menuDrop = document.querySelector(".menu-drop")
const menuBtn = document.querySelector(".menu")
const Close = document.querySelector(".close")

setVariable("home-menu").addEventListener("click", () => {
  menuDrop.style.animation = "menuout 0.3s ease-in-out "
  setTimeout(() => {
    menuDrop.style.display = "none"
  }, 300)
  let distance = setVariable("home").offsetTop - (window.pageYOffset + 90)
  scrollBy({ top: distance, behavior: "smooth" })
})
setVariable("about-menu").addEventListener("click", () => {
  menuDrop.style.animation = "menuout 0.3s ease-in-out "
  setTimeout(() => {
    menuDrop.style.display = "none"
  }, 300)
  let distance = setVariable("about").offsetTop - (window.pageYOffset + 90)
  scrollBy({ top: distance, behavior: "smooth" })
})

setVariable("project-menu").addEventListener("click", () => {
  menuDrop.style.animation = "menuout 0.3s ease-in-out "
  setTimeout(() => {
    menuDrop.style.display = "none"
  }, 300)
  let distance =
    setVariable("fullProjects").offsetTop - (window.pageYOffset + 90)
  scrollBy({ top: distance, behavior: "smooth" })
})

setVariable("skills-menu").addEventListener("click", () => {
  menuDrop.style.animation = "menuout 0.3s ease-in-out "
  setTimeout(() => {
    menuDrop.style.display = "none"
  }, 300)
  let distance = setVariable("skills").offsetTop - (window.pageYOffset + 90)
  scrollBy({ top: distance, behavior: "smooth" })
})

setVariable("contact-menu").addEventListener("click", () => {
  menuDrop.style.animation = "menuout 0.3s ease-in-out "
  setTimeout(() => {
    menuDrop.style.display = "none"
  }, 300)
  let distance = setVariable("contact").offsetTop - (window.pageYOffset + 90)
  scrollBy({ top: distance, behavior: "smooth" })
})

menuBtn.addEventListener("click", () => {
  menuDrop.style.animation = "movemenu 0.3s ease-in-out forwards "
  menuDrop.style.display = "block"
})
Close.addEventListener("click", () => {
  menuDrop.style.animation = "menuout 0.3s ease-in-out "
  setTimeout(() => {
    menuDrop.style.display = "none"
  }, 300)
})

//sets the selector to the correct app
const allProject = document.querySelector(".projects-view")
const size = document.querySelector(".view").clientWidth
const selectors = document.querySelectorAll(".s-point")

const setSelectors = (selectors, index) => {
  for (let select of selectors) {
    select.classList.remove("point-active")
  }
  selectors[index].classList.add("point-active")
}

allProject.addEventListener("click", (e) => {
  const target = document.querySelector(".target")
  const projects = document.querySelectorAll(".view")
  const id = e.target.id
  projects.forEach((p, index) => {
    if (p.id === id && index === 0) {
      target.style.transform = `translateX(${size * index}px) scale(1.1) `
      setSelectors(selectors, index)
      renderApp(id)
    } else if (p.id === id && index === 2) {
      target.style.transform = `translateX(${size * index + 50}px) scale(1.1) `
      setSelectors(selectors, index)
      renderApp(id)
    } else if (p.id === id) {
      target.style.transform = `translateX(${size * index + 25}px) scale(1.1) `
      setSelectors(selectors, index)
      renderApp(id)
    }
  })
})

const firstProjectOnLoad = () => {
  const target = document.querySelector(".target")
  const projects = document.querySelectorAll(".view")
  const id = 1
  projects.forEach((p, index) => {
    renderApp(id)
  })
}

// category section for smooth selection
const typeSize = document.querySelector(".type").clientWidth
const alltype = document.querySelectorAll(".type")
const typeList = document.querySelector(".category")
const typeSelector = document.querySelector(".type-selector")

typeList.addEventListener("click", (e) => {
  const id = e.target.id
  renderSnippet(id)
  alltype.forEach((type, index) => {
    if (type.id === id) {
      typeSelector.style.transform = `translateX(${103 * index}px)`
    }
  })
})

// Smooth scrolling section
const homeLink = document.querySelector("#home-link")
const aboutLink = document.querySelector("#about-link")
const projectLink = document.querySelector("#project-link")
const skillsLink = document.querySelector("#skills-link")
const contactLink = document.querySelector("#contact-link")
const letsTalkBtn = document.querySelector('#lets-talk-btn')
const viewProjectsBtn = document.querySelector('#view-projects-btn')
//section location
const fullProject = document.querySelector("#fullProject")

function setVariable(a) {
  const newvar = document.querySelector(`#${a}`)
  return newvar
}
letsTalkBtn.addEventListener('click', ()=>{
  let distance = setVariable("contact").offsetTop - (window.pageYOffset + 84)
  scrollBy({ top: distance, behavior: "smooth" })
})
viewProjectsBtn.addEventListener('click', ()=>{
  let distance = fullProject.offsetTop - (window.pageYOffset + 84)
  scrollBy({ top: distance, behavior: "smooth" })
})
homeLink.addEventListener("click", () => {
  let distance = setVariable("home").offsetTop - window.pageYOffset
  scrollBy({ top: distance, behavior: "smooth" })
})
aboutLink.addEventListener("click", () => {
  let distance = setVariable("about").offsetTop - (window.pageYOffset + 84)
  scrollBy({ top: distance, behavior: "smooth" })
})
projectLink.addEventListener("click", () => {
  let distance = fullProject.offsetTop - (window.pageYOffset + 84)
  scrollBy({ top: distance, behavior: "smooth" })
})
skillsLink.addEventListener("click", () => {
  let distance = setVariable("skills").offsetTop - (window.pageYOffset + 84)
  scrollBy({ top: distance, behavior: "smooth" })
})
contactLink.addEventListener("click", () => {
  let distance = setVariable("contact").offsetTop - (window.pageYOffset + 84)
  scrollBy({ top: distance, behavior: "smooth" })
})

// set navigation background
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 200) {
    setVariable("nav").style.background = "rgba(14, 14, 14, 0.89)"
  } else {
    setVariable("nav").style.background = "transparent"
  }
})

firstProjectOnLoad()
