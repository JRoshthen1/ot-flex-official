// Open and close navmenu
document.getElementById("navbarButton").onclick = function() {toggleNavMenu()};

function toggleNavMenu() {
  document.getElementById("navbarMenu").classList.toggle("openNavbarMenu");
  document.getElementById("burger1").classList.toggle("burgerLine1");
  document.getElementById("burger2").classList.toggle("burgerLine2");
  document.getElementById("burger3").classList.toggle("burgerLine3");
}
// Close navmenu by clicking on bg
document.getElementById("navbarMenu").onclick = function() {toggleNavMenu()};



// ███████╗ ██████╗  ██████╗██╗ █████╗ ██╗         ███╗   ███╗███████╗██████╗ ██╗ █████╗ 
// ██╔════╝██╔═══██╗██╔════╝██║██╔══██╗██║         ████╗ ████║██╔════╝██╔══██╗██║██╔══██╗
// ███████╗██║   ██║██║     ██║███████║██║         ██╔████╔██║█████╗  ██║  ██║██║███████║
// ╚════██║██║   ██║██║     ██║██╔══██║██║         ██║╚██╔╝██║██╔══╝  ██║  ██║██║██╔══██║
// ███████║╚██████╔╝╚██████╗██║██║  ██║███████╗    ██║ ╚═╝ ██║███████╗██████╔╝██║██║  ██║
// ╚══════╝ ╚═════╝  ╚═════╝╚═╝╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝╚══════╝╚═════╝ ╚═╝╚═╝  ╚═╝
var SocialMediaElement = document.getElementsByClassName('SocialMedia');
    for (var i = 0; i < SocialMediaElement.length; ++i) {
var item = SocialMediaElement[i];  
item.innerHTML = `<div class="socialMediaContainer">
<a href=''>
    <svg width="24" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.5 3.5c-.14-.48-.4-.92-.77-1.26a3.05 3.05 0 0 0-1.33-.75C19.52 1 12 1 12 1c-3.14-.04-6.28.12-9.4.47-.5.14-.96.4-1.33.76-.37.36-.64.8-.78 1.28C.15 5.3-.01 7.16 0 9c-.01 1.84.15 3.68.49 5.5.14.47.4.91.77 1.26.37.36.84.61 1.34.75C4.5 17 12 17 12 17a76.8 76.8 0 0 0 9.4-.47c.5-.13.96-.39 1.33-.74.37-.35.63-.79.77-1.27.34-1.81.51-3.65.5-5.5.03-1.85-.14-3.7-.5-5.51ZM9.6 12.43V5.58L15.86 9 9.6 12.42Z" fill="#000"/>
    </svg>
</a>
<a href=''>
    <svg width="20" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.32 5.56a6.23 6.23 0 0 1-1.58-1.22 5.36 5.36 0 0 1-1.28-2.65c-.1-.57-.05-.94-.05-.94h-3.86v14.94l-.01.6v.11a3.28 3.28 0 0 1-3.26 3.03 3.27 3.27 0 0 1-3.26-3.28 3.27 3.27 0 0 1 4.27-3.12V9.09a7.18 7.18 0 0 0-7.19 3.66 7.07 7.07 0 0 0-.43 5.81v.01c.09.26.45 1.16 1.05 1.91.47.61 1.04 1.14 1.67 1.58 1.88 1.27 3.95 1.2 3.95 1.2.36-.02 1.57 0 2.93-.66 1.52-.71 2.38-1.78 2.38-1.78.55-.64.99-1.37 1.3-2.16.35-.92.46-2.02.46-2.46V8.27l.67.44s.9.58 2.3.96c1.01.26 2.37.32 2.37.32V6.15c-.48.05-1.44-.1-2.43-.59Z" fill="#000"/>
    </svg>  
</a>
<a href=''>
    <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46.07C7.64 0 8.02 0 11 0s3.36.01 4.53.07a8.1 8.1 0 0 1 2.68.5c.73.28 1.4.72 1.94 1.28.56.55 1 1.21 1.27 1.94.27.7.46 1.5.51 2.67C22 7.64 22 8.01 22 11s-.01 3.36-.07 4.54a8.06 8.06 0 0 1-.5 2.66 5.4 5.4 0 0 1-1.28 1.95 5.4 5.4 0 0 1-1.94 1.27c-.7.27-1.5.46-2.67.51-1.18.06-1.55.07-4.54.07a78.6 78.6 0 0 1-4.54-.07 8.06 8.06 0 0 1-2.67-.5 5.4 5.4 0 0 1-1.94-1.28 5.4 5.4 0 0 1-1.27-1.94c-.27-.7-.46-1.5-.51-2.67A77.73 77.73 0 0 1 0 11c0-2.99.01-3.36.07-4.53a8.1 8.1 0 0 1 .5-2.68 5.4 5.4 0 0 1 1.28-1.94A5.4 5.4 0 0 1 3.79.58C4.5.3 5.3.12 6.46.07Zm8.98 1.98c-1.15-.06-1.5-.07-4.44-.07-2.94 0-3.29.01-4.45.07a6.08 6.08 0 0 0-2.04.38c-.51.2-.88.43-1.26.82-.37.35-.65.78-.83 1.26-.15.39-.32.97-.37 2.04-.06 1.17-.07 1.51-.07 4.45 0 2.94.01 3.29.07 4.45.05 1.07.22 1.65.38 2.04.17.48.45.9.82 1.26.35.37.79.65 1.26.82.39.16.97.34 2.04.38 1.17.06 1.51.07 4.45.07 2.94 0 3.29-.01 4.45-.07a6.08 6.08 0 0 0 2.04-.38c.51-.2.88-.43 1.26-.82.37-.35.65-.79.82-1.26.16-.39.34-.97.38-2.04.06-1.16.07-1.51.07-4.45 0-2.94-.01-3.29-.07-4.45a6.08 6.08 0 0 0-.38-2.04c-.2-.51-.43-.88-.82-1.26a3.41 3.41 0 0 0-1.26-.83 6.08 6.08 0 0 0-2.04-.37ZM9.6 14.39a3.67 3.67 0 1 0 2.81-6.77 3.67 3.67 0 0 0-2.81 6.77ZM7 7a5.65 5.65 0 1 1 8 8 5.65 5.65 0 0 1-8-8Zm10.9-.81a1.34 1.34 0 1 0-1.83-1.95 1.34 1.34 0 0 0 1.84 1.95Z" fill="#000"/>
    </svg>  
</a>
<a href=''>
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.07C0 18.03 4.33 22.99 10 24v-8.67H7V12h3V9.33c0-3 1.93-4.66 4.67-4.66.86 0 1.8.13 2.66.26V8H15.8c-1.47 0-1.8.73-1.8 1.67V12h3.2l-.53 3.33H14V24c5.67-1 10-5.97 10-11.93C24 5.43 18.6 0 12 0S0 5.43 0 12.07Z" fill="#000"/>
    </svg>
</a>
<a href=''>
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0a12.01 12.01 0 0 0 0 24c6.61 0 12-5.39 12-12 0-6.62-5.39-12-12-12ZM5.9 16.4a14.28 14.28 0 0 1 11.13 1.13c.13.07.25.3.3.58.05.28.03.57-.05.71a.61.61 0 0 1-.84.24 13.1 13.1 0 0 0-10.16-1.03.61.61 0 0 1-.77-.4c-.11-.35.11-1.13.4-1.23Zm-.52-4.42a18.16 18.16 0 0 1 13.07 1.4.73.73 0 0 1 .4.72c0 .1-.03.2-.08.29-.22.44-.49.74-.66.74a.77.77 0 0 1-.35-.09 16.33 16.33 0 0 0-11.98-1.27.75.75 0 0 1-.92-.52c-.11-.42.14-1.16.52-1.27ZM5.25 9.1a.88.88 0 0 1-1.07-.64c-.13-.5.19-1.08.64-1.2 1.74-.42 3.53-.64 5.32-.64 3.46 0 6.76.77 9.83 2.3a.89.89 0 0 1 .4 1.2c-.14.28-.45.6-.8.6a.92.92 0 0 1-.38-.1A20.03 20.03 0 0 0 5.25 9.1Z" fill="#000"/>
    </svg>
</a>
<a href=''>
    <svg width="24" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.16 9.47c.05 0 .09-.04.1-.1l.27-2.02-.27-2.07a.1.1 0 0 0-.1-.1.1.1 0 0 0-.1.1L.82 7.35l.24 2.02c0 .06.05.1.1.1ZM.27 8.7c.05 0 .09-.04.1-.1l.2-1.25-.2-1.28c-.01-.05-.05-.09-.1-.09s-.09.04-.1.1L0 7.34l.17 1.26c.01.05.05.09.1.09Zm1.95-3.8a.12.12 0 0 0-.12-.12.12.12 0 0 0-.12.12l-.22 2.45.22 2.37a.12.12 0 0 0 .24 0l.25-2.37-.25-2.45Zm.83 5.02a.14.14 0 0 0 .14-.13l.24-2.44-.24-2.52a.14.14 0 0 0-.14-.13.14.14 0 0 0-.14.13L2.7 7.35 2.9 9.8a.14.14 0 0 0 .14.13Zm.96.04a.16.16 0 0 0 .16-.15l.23-2.46-.23-2.34a.16.16 0 0 0-.27-.1.16.16 0 0 0-.05.1l-.2 2.34.2 2.46a.16.16 0 0 0 .16.15Zm1.36-2.6-.21-3.81a.18.18 0 0 0-.18-.18.18.18 0 0 0-.19.18l-.18 3.8.18 2.46a.18.18 0 0 0 .37 0l.21-2.46Zm.58 2.63a.2.2 0 0 0 .2-.2l.2-2.44-.2-4.67a.2.2 0 0 0-.4 0l-.18 4.67.18 2.45a.2.2 0 0 0 .2.19Zm.98-7.91a.22.22 0 0 0-.22.2l-.16 5.07.16 2.42a.22.22 0 0 0 .22.21.22.22 0 0 0 .22-.2l.19-2.43-.19-5.06a.22.22 0 0 0-.22-.21Zm.99 7.9a.24.24 0 0 0 .24-.22l.17-2.4-.17-5.24a.24.24 0 0 0-.24-.23.24.24 0 0 0-.24.23l-.15 5.23.15 2.4c0 .14.1.24.24.24Zm1 0a.26.26 0 0 0 .26-.25l.16-2.38-.16-5.1A.26.26 0 0 0 8.92 2a.26.26 0 0 0-.27.25l-.13 5.1.13 2.38c0 .14.12.25.27.25Zm1.43-2.63-.14-4.91a.28.28 0 0 0-.29-.27.28.28 0 0 0-.28.27L9.5 7.35l.13 2.37a.28.28 0 0 0 .28.27.28.28 0 0 0 .29-.27l.14-2.37Zm.59 2.64a.3.3 0 0 0 .3-.29l.13-2.34-.13-5.86a.3.3 0 0 0-.3-.29.3.3 0 0 0-.31.3l-.12 5.84.12 2.36c0 .15.14.28.3.28Zm1-9.33a.32.32 0 0 0-.32.31l-.14 6.39.14 2.31a.32.32 0 0 0 .32.3.32.32 0 0 0 .33-.3l.14-2.31-.14-6.39a.32.32 0 0 0-.33-.3Zm.93 9.34h8.18A2.9 2.9 0 0 0 24 7.17a2.9 2.9 0 0 0-2.95-2.83c-.4 0-.8.07-1.14.21A5.13 5.13 0 0 0 14.7 0c-.66 0-1.3.13-1.88.34-.22.08-.28.17-.28.33v9a.35.35 0 0 0 .32.33Z" fill="#000"/>
    </svg>
</a>
</div>`;
}