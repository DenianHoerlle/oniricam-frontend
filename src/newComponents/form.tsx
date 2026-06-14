import type { ChangeEvent, FocusEvent, SubmitEvent } from "react";
import { useState } from "react";
import { DelayAnimation } from "./delayAnimation";

const validateEmail = (email: string) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
};

const texts = {
  heading: "Join the Waiting List",
  description:
    "Be among the first to experience OniriCam when we launch. Sign up for exclusive updates and early access.",
  labels: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email *",
  },
  placeholders: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  },
  submitButton: "Subscribe",
};

const Form = () => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const isFormValid =
    formData.email.trim() !== "" &&
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "";

  const handleEmailBlur = (event: FocusEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();

    if (value.length > 0) {
      setIsEmailValid(validateEmail(value));
    } else {
      setIsEmailValid(true);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    // TODO: MAKE REQUEST
  };

  const disabledClassNames =
    isEmailValid && isFormValid ? "" : "cursor-not-allowed";

  const errorClassNames = isEmailValid
    ? ""
    : "border border-red-500 outline-red-500";

  return (
    <section
      id="contact"
      className="bg-white text-gray-900 py-24 px-6 font-sans"
    >
      <DelayAnimation delay={300}>
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-normal tracking-tight text-gray-950 mb-3 sm:text-5xl">
              {texts.heading}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
              {texts.description}
            </p>
          </div>

          <form onSubmit={(e) => handleSubmit(e)} className="w-full space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="firstName"
                  className="text-xs font-semibold text-gray-800"
                >
                  {texts.labels.firstName}
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder={texts.placeholders.firstName}
                  value={formData.firstName}
                  onChange={(e) => handleChange(e)}
                  className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:bg-white transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="text-xs font-semibold text-gray-800"
                >
                  {texts.labels.lastName}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder={texts.placeholders.lastName}
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:bg-white transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xs font-semibold text-gray-800"
              >
                {texts.labels.email}
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder={texts.placeholders.email}
                value={formData.email}
                onChange={handleChange}
                onBlur={handleEmailBlur}
                className={`w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:bg-white transition-colors ${errorClassNames}`}
              />
            </div>
            <button
              type="submit"
              disabled={!isEmailValid || !isFormValid}
              className={`w-full bg-black text-white text-sm font-medium py-3.5 rounded-md hover:bg-gray-900 active:bg-gray-950 transition-colors mt-2 shadow-sm ${disabledClassNames}`}
            >
              {texts.submitButton}
            </button>
          </form>
        </div>
      </DelayAnimation>
    </section>
  );
};

export { Form };
