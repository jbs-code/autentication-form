function animatedForm() {
    const arrows = document.querySelectorAll(".form__btn-arrow"); //botones

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            //Validaciones

            if (input.type === "text" && nameValidate(input))
                nextInput(parent, nextForm);
            else if (input.type === "email" && emailValidate(input))
                nextInput(parent, nextForm);

            //Usamos el mismmo validador de nombre para password para el ejemplo
            else if (input.type === "password" && nameValidate(input)) 
                nextInput(parent, nextForm);
            else {
                parent.style.animation = "giro 0.5s ease";
            }

            //reseteando animación
            parent.addEventListener("animationend", ()=>{
                parent.style.animation = "";
            });
        });
    });
}
//validador de nombre
function nameValidate(name) {
    if (name.value.length < 5) {
        warning("rgb(226,47,91)");
    }
    else {
        warning("rgb(47,226,61)");
        return true;
    }
}

//validador de email
function emailValidate(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        warning("rgb(47,226,61)");
        return true;
    }
    else {
        warning("rgb(226,47,91)");
    }
}

function warning(color) {
    document.querySelector(".container").style.backgroundColor = color;
}

function nextInput(parent, nextForm) {
    parent.classList.add("innactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");
}

animatedForm();