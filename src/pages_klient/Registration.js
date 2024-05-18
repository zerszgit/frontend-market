import React from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2Ffon.png?alt=media&token=442824bb-5c47-498f-93e2-df423d3a1de2"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="w-1/2 flex justify-center items-center bg-background"></div>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="bg-white rounded-l-3xl p-8 w-full h-full flex flex-col justify-center items-center rounded-2xl">
          <h2 className="text-3xl mb-6">Регистрация</h2>
          <div className="mb-6 justify-center items-center flex-col">
            <div className="mb-4 w-[419px] h-[80px] border-black border-2 rounded-2xl  ">
              <label style={{ marginLeft: 20 }}>Имя</label>
              <input
                type="name"
                id="name"
                name="email"
                placeholder="Ваше имя"
                className="tlk-input"
                required
                style={{ width: "90%", marginLeft: 20, outline: "none" }}
              />
            </div>
            <div className="mb-4 w-[419px] h-[80px] border-black border-2 rounded-2xl  ">
              <label style={{ marginLeft: 20 }}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ваша почта"
                className="tlk-input"
                required
                style={{ width: "90%", marginLeft: 20, outline: "none" }}
              />
            </div>
            <div className="mb-4 w-[419px] h-[80px] border-black border-2 rounded-2xl  ">
              <label style={{ marginLeft: 20 }}>Пароль</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ваш пароль"
                className="tlk-input"
                required
                style={{ width: "90%", marginLeft: 20, outline: "none" }}
              />
            </div>
          </div>
          <div className="mb-8">
            <button className=" py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300 h-[80px] w-[419px]">
              Зарегистрироваться
            </button>
          </div>
          <button onClick={() => navigate("/Login")}>
            <a className="tlk-form__link h-[80px] w-[469px]">
              Уже зарегистрированы? Войти тут
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

function showHidePassword(e) {
  e.preventDefault();
  const passwordInput = document.getElementById("password");
  const passwordControl = e.target;

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordControl.classList.add("view");
  } else {
    passwordInput.type = "password";
    passwordControl.classList.remove("view");
  }
}

export default RegistrationForm;
