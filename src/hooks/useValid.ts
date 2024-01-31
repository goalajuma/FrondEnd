import { useEffect, useState } from "react";

interface InitialValue {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

interface ValidText {
  nameText: string;
  emailText: string;
  passwordText: string;
  passwordConfirmText: string;
}

interface IsValid {
  isName: boolean;
  isEmail: boolean;
  isPassword: boolean;
  isPasswordConfirm: boolean;
}

const useValid = (initialValue: InitialValue) => {
  const [validText, setValidText] = useState<ValidText>({
    nameText: "",
    emailText: "",
    passwordText: "",
    passwordConfirmText: "",
  });
  const [isValid, setIsValid] = useState<IsValid>({
    isName: false,
    isEmail: false,
    isPassword: false,
    isPasswordConfirm: false,
  });

  // name validation
  useEffect(() => {
    if (initialValue.name === undefined) {
      setValidText((prevValidText) => ({
        ...prevValidText,
        nameText: "닉네임은 필수 입력사항입니다",
      }));
      setIsValid((prevIsValid) => ({ ...prevIsValid, isName: false }));
    } else {
      setValidText((prevValidText) => ({
        ...prevValidText,
        nameText: "",
      }));
      setIsValid((prevIsValid) => ({ ...prevIsValid, isName: true }));
    }
  }, [initialValue.name]);

  // email validation
  useEffect(() => {
    const exp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (initialValue.email && !exp.test(initialValue.email)) {
      setValidText((prevValidText) => ({
        ...prevValidText,
        emailText: "이메일을 확인해주세요!",
      }));
      setIsValid((prevIsValid) => ({ ...prevIsValid, isEmail: false }));
    } else {
      setValidText((prevValidText) => ({
        ...prevValidText,
        emailText: "",
      }));
      setIsValid((prevIsValid) => ({ ...prevIsValid, isEmail: true }));
    }
  }, [initialValue.email]);

  // password validation
  useEffect(() => {
    if (initialValue?.password?.length === 0) {
      setIsValid((prevIsValid) => ({ ...prevIsValid, isPassword: false }));
      setValidText((prevValidText) => ({ ...prevValidText, passwordText: "" }));
    } else if (
      initialValue?.password?.length &&
      initialValue.password.length < 8
    ) {
      setValidText((prevValidText) => ({
        ...prevValidText,
        passwordText: "8글자 이상 입력해주세요!",
      }));
      setIsValid((prevIsValid) => ({ ...prevIsValid, isPassword: false }));
    } else {
      if (isValid.isPassword) {
        return;
      }
      setValidText((prevValidText) => ({
        ...prevValidText,
        passwordText: "",
      }));
      setIsValid((prevIsValid) => ({ ...prevIsValid, isPassword: true }));
    }
  }, [initialValue.password]);

  // passwordConfirm validation
  useEffect(() => {
    if (
      initialValue.passwordConfirm &&
      initialValue.password !== initialValue.passwordConfirm
    ) {
      setValidText((prevValidText) => ({
        ...prevValidText,
        passwordConfirmText: "비밀번호가 같지 않습니다!",
      }));
      setIsValid((prevIsValid) => ({
        ...prevIsValid,
        isPasswordConfirm: false,
      }));
    } else {
      setValidText((prevValidText) => ({
        ...prevValidText,
        passwordConfirmText: initialValue.passwordConfirm
          ? ""
          : prevValidText.passwordConfirmText,
      }));
      setIsValid((prevIsValid) => ({
        ...prevIsValid,
        isPasswordConfirm: initialValue.passwordConfirm ? true : false,
      }));
    }
  }, [initialValue.passwordConfirm]);

  return { validText, isValid };
};

export default useValid;
