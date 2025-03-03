document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.getElementById("navbar"),
        themeIcon = document.getElementById("theme"),
        themes = ["light", "dark", "auto"]

    const getNextTheme = (currentTheme) => {
        const currentIndex = themes.indexOf(currentTheme);

        if (currentIndex === -1) {
            throw new Error('Invalid theme value');
        }

        const nextIndex = (currentIndex + 1) % themes.length;
        return themes[nextIndex];
    }

    const setTheme = (theme) => {
        localStorage.setItem("theme", theme)
        switch (theme) {
            case "light":
                document.documentElement.setAttribute("data-bs-theme", theme)
                navbar.classList.remove("navbar-dark")
                themeIcon.classList.add("sun")
                themeIcon.classList.remove("sun-moon")
                break
            case "dark":
                document.documentElement.setAttribute("data-bs-theme", theme)
                navbar.classList.add("navbar-dark")
                themeIcon.classList.add("moon")
                themeIcon.classList.remove("sun")
                break
            case "auto":
                const autoTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                document.documentElement.setAttribute("data-bs-theme", autoTheme)
                navbar.classList.toggle("navbar-dark", autoTheme === 'dark')
                themeIcon.classList.add("sun-moon")
                themeIcon.classList.remove("moon")
                break
            default:
                throw new Error('Invalid theme value')
        }
    }

    setTheme(localStorage.getItem("theme") || "auto")

    themeIcon.addEventListener("click", () => {
        const nextTheme = getNextTheme(localStorage.getItem("theme"))
        setTheme(nextTheme)
    })

})

