import React from 'react';
import {
  Circle,
  Defs,
  Path,
  Pattern,
  Rect,
  Svg,
  G,
  ClipPath,
} from 'react-native-svg';

const ContinueSvg = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 38 38"
      fill="none">
      <Circle cx="19" cy="19" r="19" fill="white" />
      <Path
        d="M15.3442 11.3522C15.1238 11.5778 15 11.8837 15 12.2026C15 12.5216 15.1238 12.8275 15.3442 13.053L21.1627 19.0073L15.3442 24.9615C15.13 25.1883 15.0116 25.4922 15.0142 25.8076C15.0169 26.123 15.1405 26.4247 15.3585 26.6477C15.5764 26.8707 15.8712 26.9972 16.1794 27C16.4876 27.0027 16.7846 26.8815 17.0063 26.6623L23.6558 19.8577C23.8762 19.6321 24 19.3262 24 19.0073C24 18.6883 23.8762 18.3824 23.6558 18.1568L17.0063 11.3522C16.7858 11.1267 16.4869 11 16.1752 11C15.8635 11 15.5646 11.1267 15.3442 11.3522Z"
        fill="#202020"
      />
    </Svg>
  );
};

const Back = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="30"
      viewBox="0 0 23 22"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.0418 0.999917C13.0416 0.791366 13.1066 0.587975 13.2278 0.418207C13.3489 0.248439 13.5201 0.12079 13.7173 0.0531239C13.9146 -0.0145425 14.1281 -0.0188402 14.3279 0.0408324C14.5277 0.100505 14.7039 0.221162 14.8318 0.385917L21.8318 9.38592C21.9683 9.56146 22.0425 9.77752 22.0425 9.99992C22.0425 10.2223 21.9683 10.4384 21.8318 10.6139L14.8318 19.6139C14.7039 19.7787 14.5277 19.8993 14.3279 19.959C14.1281 20.0187 13.9146 20.0144 13.7173 19.9467C13.5201 19.879 13.3489 19.7514 13.2278 19.5816C13.1066 19.4119 13.0416 19.2085 13.0418 18.9999V15.0099C7.66279 15.1219 5.07879 16.1429 3.78079 17.2529C2.54679 18.3079 2.32079 19.5489 2.08579 20.8489L2.02479 21.1839C1.97991 21.4236 1.84899 21.6387 1.65665 21.7886C1.46431 21.9385 1.2238 22.013 0.980392 21.998C0.73698 21.983 0.507437 21.8796 0.334946 21.7072C0.162455 21.5348 0.0589104 21.3053 0.043787 21.0619C-0.127213 18.3139 0.129786 14.3319 2.07079 11.0009C3.95479 7.76792 7.34779 5.28192 13.0418 5.02192V0.999917Z"
        fill="#202020"
      />
    </Svg>
  );
};

const Ellipseee = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none">
      <Circle cx="3" cy="3" r="3" fill="#202020" />
    </Svg>
  );
};

const Uper = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 8"
      fill="none">
      <Path
        d="M12 8L7 3L2 8L-8.74228e-08 7L7 6.11959e-07L14 7L12 8Z"
        fill="black"
      />
    </Svg>
  );
};

const Menubar = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none">
      <Path
        d="M0 0V2.75H22V0H0ZM0 8.1675V10.9175H22V8.1675H0ZM0 16.4175V19.1675H22V16.4175H0Z"
        fill="black"
      />
    </Svg>
  );
};
const Menubarw = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none">
      <Path
        d="M0 0V2.75H22V0H0ZM0 8.1675V10.9175H22V8.1675H0ZM0 16.4175V19.1675H22V16.4175H0Z"
        fill="white"
      />
    </Svg>
  );
};
const BackArrow = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="25"
      viewBox="0 0 26 17"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 8.5C0 8.24955 0.0978251 8.00937 0.271955 7.83227C0.446085 7.65518 0.682255 7.55569 0.928512 7.55569H22.8284L16.9843 1.61408C16.81 1.43676 16.712 1.19627 16.712 0.945505C16.712 0.694741 16.81 0.454248 16.9843 0.276932C17.1587 0.0996152 17.3952 5.90819e-09 17.6417 0C17.8883 -5.90819e-09 18.1248 0.0996152 18.2991 0.276932L25.7272 7.83143C25.8137 7.91915 25.8823 8.02335 25.9291 8.13808C25.9759 8.2528 26 8.37579 26 8.5C26 8.62421 25.9759 8.7472 25.9291 8.86192C25.8823 8.97665 25.8137 9.08085 25.7272 9.16857L18.2991 16.7231C18.1248 16.9004 17.8883 17 17.6417 17C17.3952 17 17.1587 16.9004 16.9843 16.7231C16.81 16.5458 16.712 16.3053 16.712 16.0545C16.712 15.8037 16.81 15.5632 16.9843 15.3859L22.8284 9.44431H0.928512C0.682255 9.44431 0.446085 9.34482 0.271955 9.16773C0.0978251 8.99064 0 8.75045 0 8.5Z"
        fill="black"
      />
    </Svg>
  );
};
const Travel = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="60"
      viewBox="0 0 14 60"
      fill="none">
      <Path
        d="M6 51C6 51.5523 6.44771 52 7 52C7.55228 52 8 51.5523 8 51L6 51ZM6 9L6 51L8 51L8 9L6 9Z"
        fill="black"
      />
      <Circle cx="7" cy="7" r="7" fill="#00A3FE" />
      <Rect y="46" width="14" height="14" fill="#DF2201" />
    </Svg>
  );
};
const Inputline = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="2"
      viewBox="0 0 328 2"
      fill="none">
      <Path d="M0 1H328" stroke="black" stroke-width="2" />
    </Svg>
  );
};

const MiddleArrow = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="12"
      viewBox="0 0 22 12"
      fill="none">
      <Path
        d="M11 12L0.607695 5.02487e-08L21.3923 -1.7668e-06L11 12Z"
        fill="#202020"
      />
    </Svg>
  );
};

const SecondBack = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none">
      <Path
        d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM19 7L1 7V9L19 9V7Z"
        fill="black"
      />
    </Svg>
  );
};

const Speed = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="30"
      viewBox="0 0 40 30"
      fill="none">
      <Path
        d="M20 0C8.972 0 6.97941e-06 8.972 6.97941e-06 20C-0.00258585 23.0868 0.717277 26.1313 2.10201 28.89C2.44201 29.57 3.13401 30 3.89201 30H36.106C36.864 30 37.558 29.57 37.898 28.89C39.2827 26.1313 40.0026 23.0868 40 20C40 8.972 31.028 0 20 0ZM30.044 10.044L22.12 22.12C21.8996 22.4567 21.6149 22.7465 21.2822 22.973C20.9496 23.1995 20.5756 23.3582 20.1815 23.4399C19.7875 23.5217 19.3812 23.5249 18.986 23.4494C18.5907 23.3739 18.2142 23.2212 17.878 23C17.4526 22.7218 17.1031 22.3419 16.8613 21.8948C16.6194 21.4477 16.4928 20.9473 16.4928 20.439C16.4928 19.9307 16.6194 19.4303 16.8613 18.9832C17.1031 18.5361 17.4526 18.1562 17.878 17.878L29.954 9.954C29.9686 9.94493 29.9863 9.94194 30.0031 9.94568C30.0199 9.94942 30.0346 9.95958 30.044 9.974C30.0503 9.98457 30.0537 9.99667 30.0537 10.009C30.0537 10.0213 30.0503 10.0334 30.044 10.044Z"
        fill="#449C3D"
      />
    </Svg>
  );
};

const Email = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="30"
      viewBox="0 0 12 8"
      fill="none">
      <Path
        d="M2.25 0C1.65326 0 1.08097 0.210714 0.65901 0.585787C0.237053 0.960859 0 1.46957 0 2V6C0 6.53043 0.237053 7.03914 0.65901 7.41421C1.08097 7.78929 1.65326 8 2.25 8H9.75C10.3467 8 10.919 7.78929 11.341 7.41421C11.7629 7.03914 12 6.53043 12 6V2C12 1.46957 11.7629 0.960859 11.341 0.585787C10.919 0.210714 10.3467 0 9.75 0H2.25ZM1.5 2C1.5 1.82319 1.57902 1.65362 1.71967 1.5286C1.86032 1.40357 2.05109 1.33333 2.25 1.33333H9.75C9.94891 1.33333 10.1397 1.40357 10.2803 1.5286C10.421 1.65362 10.5 1.82319 10.5 2V2.22667L6 3.94133L1.5 2.22667V2ZM1.5 3.67733L5.7045 5.27867C5.79787 5.31425 5.89841 5.33259 6 5.33259C6.10159 5.33259 6.20213 5.31425 6.2955 5.27867L10.5 3.67733V6C10.5 6.17681 10.421 6.34638 10.2803 6.4714C10.1397 6.59643 9.94891 6.66667 9.75 6.66667H2.25C2.05109 6.66667 1.86032 6.59643 1.71967 6.4714C1.57902 6.34638 1.5 6.17681 1.5 6V3.67733Z"
        fill="#202020"
      />
    </Svg>
  );
};

const Home = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M19.2 10.2L21.036 12.036L19.764 13.308L12 5.544L4.23599 13.308L2.96399 12.036L12 3L16.8 7.8V5.4H19.2V10.2ZM12 7.248L19.2 14.436V21.6H4.79999V14.436L12 7.248ZM14.4 20.4V14.4H9.59999V20.4H14.4Z"
        fill="#202020"
      />
    </Svg>
  );
};

const Sheild = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 15 16"
      fill="none">
      <Path
        d="M6.31579 0L12.0774 1.824C12.2381 1.87483 12.3785 1.97639 12.4782 2.11383C12.5779 2.25128 12.6317 2.41742 12.6316 2.588V4H14.2105C14.4199 4 14.6207 4.08429 14.7688 4.23431C14.9168 4.38434 15 4.58783 15 4.8V6.4H4.73684V4.8C4.73684 4.58783 4.82002 4.38434 4.96807 4.23431C5.11613 4.08429 5.31693 4 5.52632 4H11.0526V3.176L6.31579 1.6752L1.57895 3.176V9.0992C1.57883 9.58898 1.68967 10.0723 1.90292 10.5118C2.11617 10.9513 2.42614 11.3354 2.80895 11.6344L2.95816 11.7432L6.31579 14.064L9.30158 12H5.52632C5.31693 12 5.11613 11.9157 4.96807 11.7657C4.82002 11.6157 4.73684 11.4122 4.73684 11.2V8H15V11.2C15 11.4122 14.9168 11.6157 14.7688 11.7657C14.6207 11.9157 14.4199 12 14.2105 12L11.6684 12.0008C11.3629 12.4088 10.9918 12.7688 10.5632 13.0648L6.31579 16L2.06842 13.0656C1.43094 12.6252 0.909278 12.0336 0.548795 11.3423C0.188312 10.6511 -7.99127e-05 9.88104 2.54288e-08 9.0992V2.588C9.52154e-05 2.41755 0.0539105 2.25159 0.153602 2.11431C0.253293 1.97702 0.393649 1.87559 0.554211 1.8248L6.31579 0Z"
        fill="black"
      />
    </Svg>
  );
};

const Car = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 16 12"
      fill="none">
      <Path
        d="M11.9382 12V10.3511H3.65348V12H0.721583V7.63618C0.738777 6.83459 1.05016 6.07286 1.58776 5.51727L1.58869 5.51627L0.74111 5.36628C0.534398 5.3296 0.346483 5.21526 0.210784 5.04361C0.0750842 4.87196 0.000395625 4.65411 7.84387e-08 4.42882C-5.40908e-05 4.29058 0.027949 4.15399 0.0820545 4.02859C0.13616 3.90319 0.215064 3.792 0.313259 3.70278C0.411454 3.61356 0.526572 3.54847 0.650579 3.51204C0.774586 3.4756 0.904493 3.46872 1.03123 3.49185L1.02612 3.49085L2.47997 3.74584C2.50369 3.75084 2.52414 3.75684 2.54367 3.76384L2.54042 3.76284L3.4768 1.19995H6.46821L6.69138 0H9.481L9.70417 1.19995H12.5226L13.4595 3.76484C13.4777 3.75801 13.4963 3.7525 13.5153 3.74834L13.519 3.74784L14.9742 3.49285C15.2046 3.45316 15.4402 3.51274 15.6299 3.65867C15.8197 3.80459 15.9483 4.02509 15.9878 4.27232L15.9887 4.27782C16.0258 4.52519 15.9707 4.7783 15.8353 4.98224C15.7 5.18619 15.4953 5.32454 15.2657 5.36728L15.2606 5.36828L14.0834 5.57577C14.5861 6.12625 14.8752 6.86184 14.8919 7.63318V9.4901C14.8919 9.5546 14.885 9.6171 14.8719 9.6771L14.8729 9.6716V11.999L11.9382 12ZM10.1324 8.19166C10.1327 8.35941 10.1949 8.52018 10.3052 8.6388C10.4155 8.75742 10.565 8.82424 10.721 8.82463H13.0861C13.2422 8.82463 13.3919 8.75794 13.5023 8.63924C13.6127 8.52053 13.6747 8.35953 13.6747 8.19166C13.6747 8.02378 13.6127 7.86278 13.5023 7.74408C13.3919 7.62537 13.2422 7.55869 13.0861 7.55869H10.7219C10.566 7.55921 10.4165 7.62607 10.3062 7.74466C10.196 7.86325 10.1338 8.02394 10.1333 8.19166H10.1324ZM1.88207 8.19166C1.88231 8.35945 1.9444 8.5203 2.05474 8.63895C2.16507 8.75759 2.31464 8.82437 2.47068 8.82463H4.83581C4.99192 8.82463 5.14164 8.75794 5.25202 8.63924C5.36241 8.52053 5.42442 8.35953 5.42442 8.19166C5.42442 8.02378 5.36241 7.86278 5.25202 7.74408C5.14164 7.62537 4.99192 7.55869 4.83581 7.55869H2.47114C2.31526 7.55921 2.1659 7.626 2.05564 7.74448C1.94537 7.86297 1.88314 8.02353 1.88253 8.19116L1.88207 8.19166ZM3.26432 4.8878H12.6858C12.7016 4.8878 12.717 4.8908 12.7318 4.8908L11.802 2.3379H4.19838L3.26432 4.8878Z"
        fill="#202020"
      />
    </Svg>
  );
};
const Bell = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 15 15"
      fill="none">
      <Path
        d="M4.17503 1.21538L3.0993 0.115385C1.29388 1.52308 0.105316 3.69231 0 6.15385H1.50451C1.5578 5.17832 1.8256 4.22764 2.28797 3.37261C2.75033 2.51757 3.39536 1.78019 4.17503 1.21538ZM13.4955 6.15385H15C14.8872 3.69231 13.6986 1.52308 11.9007 0.115385L10.8325 1.21538C11.6088 1.78298 12.251 2.52116 12.7118 3.37574C13.1726 4.23032 13.4404 5.17959 13.4955 6.15385ZM12.0135 6.53846C12.0135 4.17692 10.7798 2.2 8.62839 1.67692V1.15385C8.62839 0.515385 8.12437 0 7.5 0C6.87563 0 6.37162 0.515385 6.37162 1.15385V1.67692C4.21264 2.2 2.98646 4.16923 2.98646 6.53846V10.3846L1.48195 11.9231V12.6923H13.5181V11.9231L12.0135 10.3846V6.53846ZM7.5 15C7.60532 15 7.70311 14.9923 7.8009 14.9692C8.28987 14.8615 8.68857 14.5231 8.88415 14.0615C8.95938 13.8769 8.99699 13.6769 8.99699 13.4615H5.98796C5.99549 14.3077 6.665 15 7.5 15Z"
        fill="#202020"
      />
    </Svg>
  );
};
const Info = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 15 15"
      fill="none">
      <Path
        d="M7.97027 15H7.03283C6.98518 14.9914 6.93753 14.9813 6.88987 14.9742C6.57739 14.9293 6.25828 14.9051 5.9497 14.8371C3.98929 14.4043 2.42495 13.3641 1.2969 11.7051C0.168849 10.0461 -0.219015 8.19648 0.116509 6.21094C0.36532 4.73164 1.0184 3.44727 2.04685 2.35781C3.17958 1.15937 4.55996 0.414453 6.18094 0.117188C6.46295 0.065625 6.74926 0.0390625 7.034 0H7.97144C8.14994 0.0210938 8.32923 0.0390627 8.50734 0.0636721C10.2279 0.3125 11.7102 1.04297 12.9063 2.30664C14.5554 4.05039 15.2288 6.13477 14.9319 8.51367C14.7471 9.99492 14.1394 11.3012 13.1551 12.4242C12.0305 13.7074 10.6302 14.5242 8.9538 14.8551C8.62804 14.9187 8.29798 14.9523 7.97027 15ZM5.08726 7.97344C5.4388 7.81719 5.77393 7.66094 6.11454 7.51992C6.19773 7.48555 6.29968 7.49727 6.39303 7.4875C6.39303 7.58203 6.41178 7.68281 6.39069 7.7707C6.20437 8.56758 6.00986 9.36289 5.81963 10.1586C5.71652 10.5883 5.58528 11.0156 5.59777 11.4664C5.61301 12.0051 5.91885 12.2566 6.45045 12.1715C6.96916 12.0883 7.43749 11.8742 7.88902 11.6184C8.43392 11.3086 8.9334 10.925 9.3733 10.4785C9.2733 10.3453 9.178 10.2188 9.08152 10.0879C9.02294 10.1346 8.96135 10.1774 8.89716 10.216C8.60694 10.3629 8.31946 10.5164 8.02144 10.6457C7.86715 10.7125 7.79137 10.6516 7.79411 10.4918C7.79525 10.3701 7.81045 10.249 7.83942 10.1309C8.03159 9.38555 8.23314 8.64258 8.42531 7.89766C8.53703 7.46445 8.68233 7.03828 8.67999 6.58125C8.67686 6.0043 8.43625 5.80898 7.87574 5.9375C7.12423 6.11016 6.45045 6.46055 5.80948 6.875C5.47942 7.08867 5.16577 7.32773 4.83611 7.56133C4.93532 7.72422 5.01813 7.86055 5.08726 7.97344ZM7.84254 4.66445V4.65625C7.89645 4.65625 7.95035 4.65898 8.00386 4.65625C8.66241 4.61406 9.15534 4.15977 9.21472 3.54023C9.27213 2.94844 8.98504 2.58281 8.39446 2.51484C8.24433 2.49784 8.09261 2.50099 7.94332 2.52422C7.44765 2.60234 7.0672 2.84609 6.87816 3.32969C6.62622 3.97539 6.93284 4.53672 7.59295 4.64687C7.67615 4.66016 7.75974 4.65898 7.84254 4.66445Z"
        fill="#202020"
      />
    </Svg>
  );
};
const Aggrement = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 15 14"
      fill="none">
      <Path
        d="M0.75 11.7895C0.75 12.1803 0.908035 12.5552 1.18934 12.8315C1.47064 13.1079 1.85218 13.2632 2.25 13.2632H7.323C6.95334 12.8583 6.74924 12.3334 6.75 11.7895H0.75ZM9 13.2632C9.39782 13.2632 9.77936 13.1079 10.0607 12.8315C10.342 12.5552 10.5 12.1803 10.5 11.7895V2.21053C10.5 1.64463 10.7168 1.12737 11.073 0.736842H4.5C4.10218 0.736842 3.72064 0.892105 3.43934 1.16847C3.15804 1.44484 3 1.81968 3 2.21053V11.0526H7.5V11.7895C7.5 12.1803 7.65804 12.5552 7.93934 12.8315C8.22064 13.1079 8.60218 13.2632 9 13.2632ZM2.25 2.21053C2.25 1.62426 2.48705 1.062 2.90901 0.647448C3.33097 0.232894 3.90326 0 4.5 0H12.75C13.3467 0 13.919 0.232894 14.341 0.647448C14.7629 1.062 15 1.62426 15 2.21053V3.68421H11.25V11.7895C11.25 12.3757 11.0129 12.938 10.591 13.3526C10.169 13.7671 9.59674 14 9 14H2.25C1.65326 14 1.08097 13.7671 0.65901 13.3526C0.237053 12.938 0 12.3757 0 11.7895V11.0526H2.25V2.21053ZM14.25 2.94737V2.21053C14.25 1.81968 14.092 1.44484 13.8107 1.16847C13.5294 0.892105 13.1478 0.736842 12.75 0.736842C12.3522 0.736842 11.9706 0.892105 11.6893 1.16847C11.408 1.44484 11.25 1.81968 11.25 2.21053V2.94737H14.25Z"
        fill="#202020"
      />
    </Svg>
  );
};
const Drop = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 8 3"
      fill="none">
      <Path
        d="M4 3L0.535899 1.75695e-07L7.4641 -4.29987e-07L4 3Z"
        fill="#202020"
      />
    </Svg>
  );
};

const Gellel = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none">
      <Circle cx="4" cy="4" r="4" fill="#90EE90" />
    </Svg>
  );
};
const Red = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none">
      <Circle cx="4" cy="4" r="4" fill="#FF0000" />
    </Svg>
  );
};

const Vecotr = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none">
      <Path
        d="M24.3094 0.19242L1.57137 10.6868C-1.052 11.9113 -0.177544 15.759 2.62083 15.759H12.2409V25.379C12.2409 28.1773 16.0888 29.0523 17.3132 26.4284L27.8078 3.69074C28.6822 1.59131 26.4083 -0.682569 24.3094 0.19242Z"
        fill="white"
      />
    </Svg>
  );
};
const Chat = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none">
      <Path
        d="M9.00705 25.4147C11.0803 27.0916 13.6672 28.0044 16.3337 28C18.093 28 19.7637 27.6103 21.264 26.9103L26.6051 27.9767C26.7932 28.0141 26.9878 28.0046 27.1714 27.9489C27.355 27.8932 27.5221 27.7931 27.6578 27.6574C27.7935 27.5217 27.8936 27.3547 27.9493 27.171C28.005 26.9874 28.0145 26.7929 27.977 26.6047L26.9107 21.266C27.6107 19.7657 28.0004 18.0927 28.0004 16.3333C28.0042 13.6676 27.0914 11.0816 25.4151 9.009C25.7471 10.7365 25.7526 12.5108 25.4314 14.2403C25.9206 16.3784 25.644 18.6203 24.6497 20.5753C24.5299 20.8098 24.4929 21.0779 24.5447 21.336L25.3474 25.347L21.334 24.5443C21.0767 24.493 20.8095 24.53 20.5757 24.6493C18.6203 25.6451 16.3771 25.9218 14.2384 25.431C12.5089 25.7526 10.7345 25.747 9.00705 25.4147ZM11.667 4.69669e-07C9.70511 -0.000556164 7.77472 0.493671 6.05443 1.43697C4.33414 2.38026 2.87952 3.74216 1.82512 5.39668C0.770726 7.0512 0.150603 8.9449 0.0221178 10.9026C-0.106367 12.8604 0.260935 14.8189 1.09005 16.597L0.0237161 21.938C-0.0137498 22.1262 -0.00421582 22.3207 0.0514726 22.5044C0.107161 22.688 0.207285 22.8551 0.342972 22.9907C0.478659 23.1264 0.64572 23.2266 0.829352 23.2822C1.01298 23.3379 1.20752 23.3475 1.39572 23.31L6.73438 22.2437C8.31714 22.9804 10.0451 23.3525 11.7908 23.3326C13.5365 23.3126 15.2554 22.9012 16.821 22.1285C18.3865 21.3559 19.7587 20.2417 20.8363 18.8682C21.914 17.4947 22.6696 15.8969 23.0476 14.1925C23.4255 12.488 23.4162 10.7205 23.0202 9.02024C22.6241 7.31993 21.8516 5.73018 20.7594 4.36817C19.6673 3.00617 18.2834 1.90663 16.7097 1.15062C15.1361 0.394617 13.4129 0.00141399 11.667 4.69669e-07Z"
        fill="white"
      />
    </Svg>
  );
};
const Call = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none">
      <Path
        d="M15.5832 8.50008C16.7103 8.50008 17.7913 8.94785 18.5884 9.74488C19.3854 10.5419 19.8332 11.6229 19.8332 12.7501C19.8332 13.1258 19.9824 13.4861 20.2481 13.7518C20.5138 14.0175 20.8741 14.1667 21.2498 14.1667C21.6256 14.1667 21.9859 14.0175 22.2516 13.7518C22.5172 13.4861 22.6665 13.1258 22.6665 12.7501C22.6665 10.8715 21.9202 9.06979 20.5918 7.74141C19.2635 6.41303 17.4618 5.66675 15.5832 5.66675C15.2074 5.66675 14.8471 5.816 14.5814 6.08168C14.3158 6.34736 14.1665 6.70769 14.1665 7.08341C14.1665 7.45914 14.3158 7.81947 14.5814 8.08515C14.8471 8.35083 15.2074 8.50008 15.5832 8.50008Z"
        fill="white"
      />
      <Path
        d="M15.5833 2.83333C18.2134 2.83333 20.7357 3.87812 22.5955 5.73786C24.4552 7.59759 25.5 10.1199 25.5 12.75C25.5 13.1257 25.6493 13.4861 25.9149 13.7517C26.1806 14.0174 26.5409 14.1667 26.9167 14.1667C27.2924 14.1667 27.6527 14.0174 27.9184 13.7517C28.1841 13.4861 28.3333 13.1257 28.3333 12.75C28.3333 9.36849 26.99 6.12548 24.5989 3.73439C22.2079 1.3433 18.9648 0 15.5833 0C15.2076 0 14.8473 0.149255 14.5816 0.414932C14.3159 0.680609 14.1667 1.04094 14.1667 1.41667C14.1667 1.79239 14.3159 2.15272 14.5816 2.4184C14.8473 2.68408 15.2076 2.83333 15.5833 2.83333ZM27.9792 19.7058C27.9012 19.4784 27.7667 19.2746 27.5883 19.1135C27.4099 18.9524 27.1933 18.8393 26.9592 18.785L18.4592 16.8442C18.2284 16.7919 17.9883 16.7982 17.7606 16.8625C17.533 16.9268 17.325 17.0472 17.1558 17.2125C16.9575 17.3967 16.9433 17.4108 16.0225 19.1675C12.967 17.7596 10.5187 15.3012 9.12333 12.24C10.9225 11.3333 10.9367 11.3333 11.1208 11.1208C11.2862 10.9516 11.4065 10.7437 11.4708 10.516C11.5352 10.2884 11.5415 10.0482 11.4892 9.8175L9.54833 1.41667C9.494 1.18249 9.38097 0.965984 9.21987 0.787541C9.05878 0.609099 8.85492 0.474587 8.6275 0.396667C8.29666 0.278502 7.95502 0.193092 7.6075 0.141667C7.24944 0.0586432 6.88406 0.0111907 6.51667 0C4.78834 0 3.1308 0.686576 1.90869 1.90869C0.686576 3.1308 0 4.78834 0 6.51667C0.00749688 12.3005 2.30844 17.8453 6.39823 21.9351C10.488 26.0249 16.0328 28.3258 21.8167 28.3333C22.6724 28.3333 23.5198 28.1648 24.3105 27.8373C25.1011 27.5098 25.8195 27.0298 26.4246 26.4246C27.0298 25.8195 27.5098 25.1011 27.8373 24.3105C28.1648 23.5198 28.3333 22.6724 28.3333 21.8167C28.3338 21.4561 28.3053 21.096 28.2483 20.74C28.1888 20.3881 28.0987 20.0421 27.9792 19.7058Z"
        fill="white"
      />
    </Svg>
  );
};
const Call2 = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none">
      <Path
        d="M15.5832 8.50008C16.7103 8.50008 17.7913 8.94785 18.5884 9.74488C19.3854 10.5419 19.8332 11.6229 19.8332 12.7501C19.8332 13.1258 19.9824 13.4861 20.2481 13.7518C20.5138 14.0175 20.8741 14.1667 21.2498 14.1667C21.6256 14.1667 21.9859 14.0175 22.2516 13.7518C22.5172 13.4861 22.6665 13.1258 22.6665 12.7501C22.6665 10.8715 21.9202 9.06979 20.5918 7.74141C19.2635 6.41303 17.4618 5.66675 15.5832 5.66675C15.2074 5.66675 14.8471 5.816 14.5814 6.08168C14.3158 6.34736 14.1665 6.70769 14.1665 7.08341C14.1665 7.45914 14.3158 7.81947 14.5814 8.08515C14.8471 8.35083 15.2074 8.50008 15.5832 8.50008Z"
        fill="black"
      />
      <Path
        d="M15.5833 2.83333C18.2134 2.83333 20.7357 3.87812 22.5955 5.73786C24.4552 7.59759 25.5 10.1199 25.5 12.75C25.5 13.1257 25.6493 13.4861 25.9149 13.7517C26.1806 14.0174 26.5409 14.1667 26.9167 14.1667C27.2924 14.1667 27.6527 14.0174 27.9184 13.7517C28.1841 13.4861 28.3333 13.1257 28.3333 12.75C28.3333 9.36849 26.99 6.12548 24.5989 3.73439C22.2079 1.3433 18.9648 0 15.5833 0C15.2076 0 14.8473 0.149255 14.5816 0.414932C14.3159 0.680609 14.1667 1.04094 14.1667 1.41667C14.1667 1.79239 14.3159 2.15272 14.5816 2.4184C14.8473 2.68408 15.2076 2.83333 15.5833 2.83333ZM27.9792 19.7058C27.9012 19.4784 27.7667 19.2746 27.5883 19.1135C27.4099 18.9524 27.1933 18.8393 26.9592 18.785L18.4592 16.8442C18.2284 16.7919 17.9883 16.7982 17.7606 16.8625C17.533 16.9268 17.325 17.0472 17.1558 17.2125C16.9575 17.3967 16.9433 17.4108 16.0225 19.1675C12.967 17.7596 10.5187 15.3012 9.12333 12.24C10.9225 11.3333 10.9367 11.3333 11.1208 11.1208C11.2862 10.9516 11.4065 10.7437 11.4708 10.516C11.5352 10.2884 11.5415 10.0482 11.4892 9.8175L9.54833 1.41667C9.494 1.18249 9.38097 0.965984 9.21987 0.787541C9.05878 0.609099 8.85492 0.474587 8.6275 0.396667C8.29666 0.278502 7.95502 0.193092 7.6075 0.141667C7.24944 0.0586432 6.88406 0.0111907 6.51667 0C4.78834 0 3.1308 0.686576 1.90869 1.90869C0.686576 3.1308 0 4.78834 0 6.51667C0.00749688 12.3005 2.30844 17.8453 6.39823 21.9351C10.488 26.0249 16.0328 28.3258 21.8167 28.3333C22.6724 28.3333 23.5198 28.1648 24.3105 27.8373C25.1011 27.5098 25.8195 27.0298 26.4246 26.4246C27.0298 25.8195 27.5098 25.1011 27.8373 24.3105C28.1648 23.5198 28.3333 22.6724 28.3333 21.8167C28.3338 21.4561 28.3053 21.096 28.2483 20.74C28.1888 20.3881 28.0987 20.0421 27.9792 19.7058Z"
        fill="black"
      />
    </Svg>
  );
};
const Inkort = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none">
      <Path
        d="M13.5 0H2.25C1.0095 0 0 1.0095 0 2.25V11.25C0 12.4905 1.0095 13.5 2.25 13.5H13.5C14.3273 13.5 15 12.8273 15 12V10.5H9C8.17275 10.5 7.5 9.82725 7.5 9V4.5C7.5 3.67275 8.17275 3 9 3H15V1.5C15 0.67275 14.3273 0 13.5 0Z"
        fill="#202020"
      />
    </Svg>
  );
};
const Logout = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none">
      <Path
        d="M7.5 0C3.35802 0 0 3.35802 0 7.5C0 11.642 3.35802 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.35802 11.642 0 7.5 0ZM6.68393 3.69253C6.68393 3.10978 7.08523 2.63711 7.57911 2.63711C7.82649 2.63711 8.05035 2.75549 8.21231 2.9464C8.3847 3.15622 8.47757 3.42012 8.47458 3.69167V6.05274C8.47458 6.63549 8.07328 7.10787 7.57911 7.10787C7.08494 7.10787 6.68393 6.63549 6.68393 6.05274V3.69253ZM7.5 11.9043C6.59217 11.9042 5.71344 11.584 5.01834 11.0001C4.32325 10.4161 3.85631 9.60581 3.69965 8.7116C3.543 7.81739 3.70665 6.89658 4.16184 6.11112C4.61702 5.32565 5.33458 4.72583 6.18832 4.41716V5.82171C5.70708 6.1055 5.33081 6.53767 5.11595 7.05339C4.90109 7.56911 4.85921 8.1406 4.99661 8.68213C5.13401 9.22367 5.44327 9.70606 5.87802 10.057C6.31276 10.4079 6.84955 10.6084 7.40788 10.6284C7.96621 10.6484 8.51599 10.4869 8.97476 10.1681C9.43354 9.84921 9.77657 9.39022 9.95242 8.85993C10.1283 8.32963 10.1275 7.75662 9.95011 7.22682C9.77276 6.69703 9.42843 6.23901 8.96875 5.92146V4.47764C9.79498 4.81768 10.4776 5.43391 10.9001 6.22115C11.3226 7.0084 11.4588 7.91788 11.2854 8.79436C11.1121 9.67084 10.64 10.46 9.94961 11.0272C9.25925 11.5943 8.39346 11.9043 7.5 11.9043Z"
        fill="#202020"
      />
    </Svg>
  );
};
const Prof = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none">
      <G clip-Path="url(#clip0_25_127)">
        <Path
          d="M11 0C4.92486 0 0 4.92486 0 11C0 17.0751 4.92486 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92486 17.0751 0 11 0ZM8.37622 4.0498H15.6084V7.20397L16.0609 6.75281L18.3047 8.99523L13.0061 14.2952L9.68409 15.3748L10.7623 12.0514L14.3932 8.42054V5.25829H9.26246V7.43494H6.97437V16.7417H14.3932V14.7356L15.6084 13.5191V17.9502H5.7578V6.57824L8.37622 4.0498ZM11.3236 12.6113L10.7838 14.2737L12.4448 13.7339L11.3236 12.6113Z"
          fill="#202020"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_25_127">
          <Rect width="22" height="22" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

const Forar = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="33"
      viewBox="0 0 29 33"
      fill="none">
      <Path
        d="M21.72 2H2V28.68H7.8M15.92 20.56L14.76 31L19.98 28.68L25.2 31L24.04 20.56"
        stroke="#202020"
        stroke-width="3.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.9803 21.72C23.5039 21.72 26.3603 18.8635 26.3603 15.34C26.3603 11.8164 23.5039 8.95996 19.9803 8.95996C16.4568 8.95996 13.6003 11.8164 13.6003 15.34C13.6003 18.8635 16.4568 21.72 19.9803 21.72Z"
        stroke="#202020"
        stroke-width="3.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const Tup = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="33"
      viewBox="0 0 28 33"
      fill="none">
      <Path
        d="M18.8153 12.4665C19.5295 10.243 19.8913 8.2954 19.8913 6.61731C19.8913 2.88095 18.4333 0 16.0096 0C14.6945 0 14.2877 0.78529 13.7784 2.72203C13.8063 2.62075 13.5253 3.70987 13.4446 4.00124C13.2877 4.5606 13.0145 5.51261 12.6263 6.85415C12.6158 6.89 12.6001 6.92411 12.5797 6.95542L8.12974 13.9451C7.07651 15.598 5.52278 16.8682 3.69684 17.5693L1.74512 18.3203C1.14857 18.5496 0.651619 18.9826 0.341545 19.5431C0.0314703 20.1036 -0.0718971 20.7558 0.0495969 21.3851L1.11474 26.8993C1.2418 27.557 1.554 28.1644 2.01436 28.6495C2.47473 29.1347 3.06398 29.4773 3.71237 29.6369L16.522 32.7874C18.4102 33.2516 20.4046 32.9489 22.0716 31.9452C23.7386 30.9414 24.9432 29.3178 25.4235 27.4275L27.8674 17.8092C28.0283 17.1766 28.043 16.5153 27.9103 15.8761C27.7776 15.2368 27.5011 14.6364 27.1019 14.1208C26.7027 13.6052 26.1913 13.1879 25.6068 12.901C25.0223 12.614 24.3802 12.4648 23.7295 12.4649H18.8153V12.4665Z"
        fill="#202020"
      />
    </Svg>
  );
};

const Driveeer = () => {
  return (
    <Svg
      width="19"
      height="25"
      viewBox="0 0 19 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14.6774 7.34106C14.8021 7.66654 14.9654 7.97596 15.1635 8.26272C15.5068 8.65213 16.2649 8.98623 16.2488 9.31342C16.2165 9.95858 15.94 10.8249 15.4585 11.1567C14.8745 11.5471 14.4387 12.1225 14.2211 12.7904C13.4677 14.7696 11.5529 15.9586 9.33864 15.9102C7.20961 15.8641 5.40546 14.5277 4.63587 12.4885C4.46716 12.0602 4.17832 11.6898 3.80408 11.4217C3.07827 10.9286 2.63357 10.3411 2.69808 9.44014C2.75569 8.64291 3.25108 8.36641 3.97919 8.23277C4.152 8.20051 4.22804 7.65212 4.34785 7.34106L4.31329 7.37332C5.00454 7.27424 5.36859 7.53231 5.76491 8.14752C5.95611 8.40818 6.19711 8.62834 6.47397 8.79524C6.75082 8.96214 7.05803 9.07248 7.37781 9.11987C8.79149 9.25812 10.2153 9.25812 11.629 9.11987C11.9487 9.07248 12.256 8.96214 12.5328 8.79524C12.8097 8.62834 13.0507 8.40818 13.2419 8.14752C13.6382 7.53231 14.0161 7.27424 14.6958 7.37332L14.6774 7.34106Z"
        fill="#202020"
      />
      <Path
        d="M4.3479 7.34104L2.44467 7.60832C1.38246 5.92398 1.61518 4.18896 3.14744 2.712C6.20504 -0.239613 12.8249 -0.239613 15.8779 2.712C17.4101 4.18896 17.6428 5.92168 16.5829 7.60832L14.6774 7.34104L14.7143 7.37329C14.7143 7.18205 14.7143 6.9908 14.7143 6.79956C14.7258 4.61753 14.5898 4.35025 12.4101 4.08297C10.7775 3.89442 9.13198 3.84278 7.49076 3.92859C4.61288 4.06684 4.26495 4.49311 4.29951 7.37329L4.3479 7.34104Z"
        fill="#202020"
      />
      <Path
        d="M10.8826 20.7143C11.6614 21.636 12.0646 21.0899 12.477 20.3456C13.0216 19.3355 13.6192 18.3548 14.2674 17.4078C14.4563 17.1406 14.9586 16.9954 15.3296 16.9793C15.7328 16.9608 16.1452 17.1521 16.5508 17.2604C18.083 17.6705 18.8895 18.6037 18.9724 20.1982C19.0323 21.3825 18.9724 22.5737 18.9955 23.7604C18.9955 24.4055 18.7236 24.6244 18.09 24.6175C16.1383 24.5899 14.1729 24.6406 12.2328 24.5784C11.8872 24.5784 11.4678 24.2304 11.2351 23.9286C10.9148 23.5138 10.8111 22.9309 10.4886 22.5184C9.90331 21.765 10.2651 21.2765 10.8826 20.7143Z"
        fill="#202020"
      />
      <Path
        d="M8.17745 20.8157C9.04612 21.3687 8.75119 21.9217 8.51386 22.6291C7.97008 24.242 7.01155 24.8618 5.28805 24.6475C3.96777 24.4839 2.61063 24.5669 1.27192 24.6314C0.35026 24.6775 -0.0690947 24.4171 0.00924635 23.424C0.080675 22.5023 0.0092465 21.5807 0.0253755 20.659C0.0553295 18.3549 1.84335 16.6775 4.12215 16.8572C4.35257 16.8733 4.61524 17.1613 4.7604 17.3894C5.37561 18.3572 5.94934 19.3526 6.54151 20.3341C7.17515 21.3572 7.17515 21.3572 8.17745 20.8157Z"
        fill="#202020"
      />
      <Path
        d="M8.93073 18.8595L7.48603 20.0277L5.36621 16.5069C7.54133 16.0346 7.61045 18.1682 8.93073 18.8595Z"
        fill="#202020"
      />
      <Path
        d="M11.5526 20.0253L10.1494 18.9009C11.3361 18.1106 11.5296 16.2074 13.6978 16.4378L11.5526 20.0253Z"
        fill="#202020"
      />
      <Path
        d="M9.50723 22.6591L10.4289 24.5439H8.604L9.50723 22.6591Z"
        fill="#202020"
      />
      <Path
        d="M10.6611 16.8986L9.50902 18.281L8.34082 16.8986H10.6611Z"
        fill="#202020"
      />
      <Path
        d="M13.6615 6.39632H5.41724C5.21217 5.37788 5.22369 5.17742 6.06932 5.14747C8.34582 5.0553 10.6315 5.07835 12.9103 5.12443C13.5647 5.13365 13.991 5.52765 13.6615 6.39632Z"
        fill="#202020"
      />
      <Path
        d="M6.4585 7.40088H12.4908L12.6106 7.66586C12.2442 7.84097 11.8755 8.14281 11.4954 8.17046C7.65205 8.40318 7.01149 8.2995 6.4585 7.40088Z"
        fill="#202020"
      />
    </Svg>
  );
};

export {
  ContinueSvg,
  Back,
  Ellipseee,
  Uper,
  Menubar,
  BackArrow,
  Travel,
  Inputline,
  MiddleArrow,
  SecondBack,
  Speed,
  Email,
  Home,
  Sheild,
  Car,
  Bell,
  Info,
  Aggrement,
  Drop,
  Menubarw,
  Gellel,
  Vecotr,
  Red,
  Chat,
  Call,
  Inkort,
  Logout,
  Prof,
  Call2,
  Forar,
  Tup,
  Driveeer,
};
export default ContinueSvg;
