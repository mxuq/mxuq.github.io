function navDecoline(flag, name)
{
    if (flag)
    {
        document.getElementById(name).style.width = "100%";
    }
    else
    {
        document.getElementById(name).style.width = "0%";
    }
}

function shadow_fade(flag, name)
{
    if (flag)
    {
        document.getElementById(name).style = "text-shadow: 0 0 10px rgba(255, 255, 255, 1);";
    }
    else
    {
        document.getElementById(name).style = "0 0 10px rgba(255, 255, 255, 0);";
    }
}

function mobile_menu()
{
    let contents = document.getElementById("mobile_menu_contents");
    let className = contents.className;
    if (className == 'hidden')
    {
        contents.classList.remove('hidden');
        contents.classList.add('mobile__menu');
        setTimeout(() => {
            contents.classList.add('mobile__menu-triggered');
        }, 100);
        document.getElementById('menu_icon_1').classList.add('hidden');
        document.getElementById('menu_icon_2').classList.remove('hidden');
    }
    else
    {
        contents.classList.remove('mobile__menu-triggered');
        setTimeout(() => {
            contents.classList.remove('mobile__menu');
            contents.classList.add('hidden');
        }, 500);
        document.getElementById('menu_icon_1').classList.remove('hidden');
        document.getElementById('menu_icon_2').classList.add('hidden');
    }
}