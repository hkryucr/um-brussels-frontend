import { totalmem } from "os";

const gray ='#2c3531';
const teal ='#116466'; 
const brown ='#d9b08c';
const tan ='#ffcb9a';
const mintGreen ='#d1e8e2';
const lightGray = '#f0f0f0';

const text = {
  primary: teal,
  interacting: mintGreen,
}

const background = {
  primary: lightGray,
  secondary: gray,
  tertiary: tan,
}

const foregroundColors = {
  primary: mintGreen,
  secondary: tan,
}


export default {
  background,
  foregroundColors,
  text,
  gray,
  teal,
  brown,
  tan,
  mintGreen,
  lightGray
}