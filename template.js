document.addEventListener('DOMContentLoaded', function() {
    // 插入header
    const headerTemplate = `
        <div class="header-container">
            <div class="logo">
                <a href="index.html">
                    <img src="imgs/1.png" alt="世界机器人大赛logo">
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">首页</a></li>
                    <li class="dropdown">
                        <a href="#about">赛事介绍</a>
                        <ul class="dropdown-content">
                            <li><a href="wrc.html">WRC赛事介绍</a></li>
                            <li><a href="youth.html">青少年机器人设计大赛</a></li>
                            <li><a href="smart-city.html">智慧城市</a></li>
                            <li><a href="beach-landing.html">抢滩登陆</a></li>
                        </ul>
                    </li>
                    <li><a href="index.html#schedule">赛事安排</a></li>
                    <li><a href="index.html#benefits">参赛收获</a></li>
                    <li><a href="index.html#registration">预报名</a></li>
                </ul>
            </nav>
        </div>
    `;

    // 插入footer
    const footerTemplate = `
        <p>&copy; 2023 2024世界机器人大赛·北京选拔赛. 保留所有权利。</p>
        <nav>
            <a href="#privacy">隐私政策</a> |
            <a href="#terms">使用条款</a>
        </nav>
    `;

    // 插入模板
    document.querySelector('header').innerHTML = headerTemplate;
    document.querySelector('footer').innerHTML = footerTemplate;
});
