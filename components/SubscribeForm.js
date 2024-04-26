import { useState } from 'react';

function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUp = () => {
    // Valider emailformat
    const isValidFormat = validateEmailFormat(email);
    if (!isValidFormat) {
      setIsValidEmail(false);
      return;
    }

    // Vis bekræftelsesmeddelelse
    alert(`Tilmelding fuldført for ${email}`);

    // Ryd email-inputfeltet efter tilmelding
    setEmail('');
    setIsValidEmail(true);
  };

  const validateEmailFormat = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      <img
        src="/assets/Subscribe.png"
        alt="description_of_image"
        width="1920"
        height="10"
      />
      <div className="absolute z-10 flex flex-row gap-12">
        <div className="text-3xl top-9 text-white font-bold">
          Tilmeld dig vores nyhedsbrev og
          <br /> hold dig opdateret på boligmarkedet
        </div>
        <div>
          <div className="relative">
            <input
              type="email"
              placeholder="Indtast din email adresse"
              className={`pl-10 text-[1rem] rounded w-[30rem] h-[4rem] ${
                !isValidEmail ? 'border-red-500' : ''
              }`}
              value={email}
              onChange={handleEmailChange}
            />
            {!isValidEmail && (
              <p className="text-red-500 text-sm mt-1">Ugyldigt E-mail format</p>
            )}

            <img
              src="/icons/arrow.svg"
              alt="description_of_image"
              width="25"
              height="25"
              className="absolute ml-8 left-96 top-1/2 transform -translate-y-1/2 h-12 w-8 text-gray-500 cursor-pointer"
              onClick={handleSignUp}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeForm;
