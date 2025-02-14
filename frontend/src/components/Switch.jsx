import React from 'react';
import styled from 'styled-components';
import { DarkModeContext } from '../context/DarkModeContext.jsx';
import { useContext } from 'react';


const Switch = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  
  return (
    <StyledWrapper className='absolute  md:left-3/4 left-2/4 top-10'>
      <label className="switch">
        <input type="checkbox" className="input__check" checked={darkMode? true : false} onChange={() => setDarkMode(!darkMode)} />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* The switch - the box around the slider */
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
    transform-style: preserve-3d;
    perspective: 500px;
    animation: toggle__animation 3s infinite;
  }

  .switch::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    filter: blur(20px);
    z-index: -1;
    border-radius: 50px;
    background-color: #d8ff99;
    background-image: radial-gradient(at 21% 46%, hsla(183,65%,60%,1) 0px, transparent 50%),
  radial-gradient(at 23% 25%, hsla(359,74%,70%,1) 0px, transparent 50%),
  radial-gradient(at 20% 1%, hsla(267,83%,75%,1) 0px, transparent 50%),
  radial-gradient(at 86% 87%, hsla(204,69%,68%,1) 0px, transparent 50%),
  radial-gradient(at 99% 41%, hsla(171,72%,77%,1) 0px, transparent 50%),
  radial-gradient(at 55% 24%, hsla(138,60%,62%,1) 0px, transparent 50%);
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fdfefedc;
    transition: .4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    left: 0.3em;
    bottom: 0.35em;
    transition: .4s;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -10px 10px 0px inset,
       rgba(0, 0, 0, 0.09) 0px -1px 15px -8px;
    background-color: #3D5D5C;
  }

  .input__check:checked + .slider {
    background-color: #17202A;
  }

  .input__check:checked + .slider:before {
    transform: translateX(1.5em);
  }

  @keyframes toggle__animation {
    0%, 100% {
      transform: translateY(-10px) rotateX(15deg) rotateY(-20deg);
    }

    50% {
      transform: translateY(0px) rotateX(15deg) rotateY(-20deg);
    }
  }`;

export default Switch;
