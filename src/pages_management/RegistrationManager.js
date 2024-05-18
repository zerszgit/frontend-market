import React from 'react';

function RegistrationForm() {
  return (
    <div className="flex h-screen">
        <img
        src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2Ffon.png?alt=media&token=442824bb-5c47-498f-93e2-df423d3a1de2"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="w-1/2 flex justify-center items-center bg-background">
      </div>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="bg-white rounded-l-3xl p-8 w-full h-full flex flex-col justify-center items-center rounded-2xl">
          <h2 className="text-3xl mb-6">Регистрация</h2>
          <div className="mb-6 justify-center items-center flex-col">
            <div className="mb-4 w-[419px] h-[97px] border-black border-2 rounded-3xl p-4  ">
              <label htmlFor="name" className="text-sm  block mb-2">Имя</label>
              <input type="text" id="name" name="name" placeholder="ваше имя" className="tlk-input" required />
            </div>
            <div className="mb-4  w-[419px] h-[97px] border-black border-2 rounded-3xl flex flex-col p-4  ">
              <label htmlFor="email" className="text-sm block mb-2">Email</label>
              <input type="email" id="email" name="email" placeholder="janedoe@mail.com" className="tlk-input" required />
            </div>
            <div className="mb-4  w-[419px] h-[97px] border-black border-2 rounded-3xl flex flex-col p-4  ">
              <label htmlFor="email" className="text-sm block mb-2">Пароль</label>
              <input type="email" id="email" name="email" placeholder="создайте свой пароль" className="tlk-input" required />
            </div>
        
          </div>
          <div className="mb-8">
            <button className=" py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition duration-300 h-[80px] w-[419px]">Войти</button>
          </div>
          <div>
            <a href="login.html" className="tlk-form__link h-[80px] w-[469px]">Уже зарегистрированы? Войти тут</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function showHidePassword(e) {
  e.preventDefault();
  const passwordInput = document.getElementById('password');
  const passwordControl = e.target;

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordControl.classList.add('view');
  } else {
    passwordInput.type = 'password';
    passwordControl.classList.remove('view');
  }
}

export default RegistrationForm;
