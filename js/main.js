/**
 * HankTheSniper — Game Designer Portfolio
 * Light Bauhaus theme
 */

const BASE = 'src/策划与开发经验';

// --- Project Data ---
// Media ordered: cover first, video second, other images after
const projects = {
    aicolossuem: {
        title: 'AI 竞技场',
        role: '策划 · 平台架构设计 · 游戏美术设计 · 用户文档与脚本撰写 · 赛事宣传美术设计',
        intro: `一个AI算法对抗游戏，通过Socket实现Unity客户端与外部AI脚本的实时互动。AI脚本获取游戏状态，做出决策，向游戏发送行为。

这并非是传统意义上的游戏，而是一个对战、算法评估平台，主要面向算法研究人员与编程爱好者。我们配备了完整的教程代码、文档与接口脚本帮助玩家更好地使用它。注意，它不只包含一个赛题，未来会有更多赛题。

当前开发较为完善的只有一个2D横版射击赛题AbstractShooter。AbstractShooter整体UI的美术风格为蒙德里安荷兰风格派，每个功能界面与主菜单在图案上都是互通的，它们组成一张更大的绘画。

正在开发中的第二个赛题为PaperScissorStone，三方对战。每一方都拥有单一种类相同数量的实体（石头、剪刀、布），被克制实体遇到克制实体会被同化（如布实体被剪刀实体碰到会变成剪刀实体）。新赛题主要考验玩家的群分析、决策算法。

接口脚本已经适配当下较为流行的强化学习工具包Stablebaselines3，玩家几乎可以零门槛体验智能体对战乐趣。`,
        media: [
            { type: 'image', src: `${BASE}/AiColossuem/AiColossuem_post.png` },
            { type: 'video', src: `${BASE}/AiColossuem/AI竞技场.mp4` },
            { type: 'image', src: `${BASE}/AiColossuem/游戏.png` },
            { type: 'image', src: `${BASE}/AiColossuem/菜单.png` },
            { type: 'image', src: `${BASE}/AiColossuem/原型设计.png` },
            { type: 'image', src: `${BASE}/AiColossuem/文档图片1.png` },
            { type: 'image', src: `${BASE}/AiColossuem/文档图片2.png` },
            { type: 'image', src: `${BASE}/AiColossuem/游戏logo.png` },
            { type: 'image', src: `${BASE}/AiColossuem/竞赛logo1.png` },
            { type: 'image', src: `${BASE}/AiColossuem/竞赛logo2.png` },
            { type: 'image', src: `${BASE}/AiColossuem/第一届宣传海报1.png` },
            { type: 'image', src: `${BASE}/AiColossuem/第一届宣传海报2.png` },
            { type: 'image', src: `${BASE}/AiColossuem/第一届宣传海报3.png` },
        ]
    },

    bubblebattle: {
        title: '泡泡战斗艺术家',
        role: '策划 · 美术',
        intro: `2025 Global Game Jam & 2025开拓芯参赛作品

2D横版平台跳跃游戏。玩家拥有操控泡泡的能力，玩家将利用此能力越过障碍，战胜敌人，到达终点。

泡泡的特性在战斗与闯关中得以充分利用：包括泡泡的弹力、浮力与其爆破的冲击力；泡泡可以控制敌人；小泡泡可以合成大泡泡；泡泡可以配合石头、箱子、硬币等物品实现目标…

十余种奇妙生物各有特点，不仅设定与外观奇特（鸡人、集装箱人、投石车人），它们的行为方式（攻击、被击杀）都各有不同，且这些内容不会在教程里书写，而是依靠玩家自行探索。

主角的机动性并不算高，需要配合泡泡战斗、闯关。但是泡泡也是脆弱且缓慢的，这就需要玩家的思考与布局。这种设定颠覆了传统战斗的以快打慢，而是反过来尝试实现以慢打快的效果。让战斗不再匆匆忙忙，而是像艺术一般优雅——这也是本游戏名字的由来。`,
        media: [
            { type: 'image', src: `${BASE}/BubbleBattleArtist/BubbleArtist_post.png` },
            { type: 'image', src: `${BASE}/BubbleBattleArtist/室内.png` },
            { type: 'image', src: `${BASE}/BubbleBattleArtist/沙滩.png` },
            { type: 'image', src: `${BASE}/BubbleBattleArtist/雨天.png` },
            { type: 'image', src: `${BASE}/BubbleBattleArtist/雪地.png` },
        ]
    },

    live4burger: {
        title: 'Live4Burger',
        role: '独立开发',
        intro: `"我们必须想象不停下楼或制作汉堡的玩家是幸福的。"

该游戏的意义尚不可知，但本质上是下楼梯+策略物资收集。🍞+🧀+🍅+🥬+🥓=🍔，这是游戏内仅有的规则。这些食材可以用于合成汉堡，也可以用于食用恢复生命值。

下楼的距离更长？还是制作更多汉堡？游戏的作者也没能给出答案。当价值体系崩塌，你是否有勇气在废墟上重建楼阁？当上帝已死，你能否从骆驼蜕变为雄狮，最后脱胎为孩童？就像《头号玩家》所言“游戏不在赢，而是在玩”。

其他的，下楼梯类型游戏少不了多种平台，本游戏包括普通平台、火焰平台、芝士平台。其中火焰平台会对玩家造成伤害，但是当玩家手中有生肉的时候，可以与之交互成熟肉。芝士平台会减速玩家，但是当玩家手握铁铲时可以交互收集芝士（我们必须想象食品是安全的）。生肉自然掉落到火焰平台也会变成熟肉。

游戏中的音乐与音效使用十分讲究。游戏内有一个耳机道具，可以减小玩家的重力，它还可以把游戏的BGM"哎呦我滴妈呀"改变为《What a Wonderful World》。`,
        media: [
            { type: 'image', src: `${BASE}/Live4Burger/Live2Burger.png` },
            { type: 'video', src: `${BASE}/Live4Burger/为堡而活.mp4` },
            { type: 'image', src: `${BASE}/Live4Burger/游戏截图1.png` },
            { type: 'image', src: `${BASE}/Live4Burger/游戏截图2.png` },
        ]
    },

    posttreatment: {
        title: '一步之遥',
        role: '策划',
        intro: `背景介绍：
二〇〇六年的維多利亞港霓虹依舊，而時代的潮水卻早已轉向。盲人殺手在內地被捕出獄後悄然返港，受舊友委託以暴力為其競選開路。然而幾經周折，舊友的得償所願卻導致香港的動蕩不安。殺手最終決定從陰影走向台前，親自競選話事人……

碎片化的感官經過重構，包含政治博弈、地緣映射、新舊秩序碰撞等元素的暗線劇情被拼湊而出——整個事件並非幫派的權利更迭，而是一次由神秘力量主刀的「外科手術」，它試圖用香港本土的方式解決97年前的遺留問題，邁過香港通往真正繁榮穩定的最後一步。

游戏特色：
• 新颖的感知系统，调动多重感官推理任务目标，拒绝单一视觉信息与直白todolist
• 战场信息博弈论，在行动中依靠感官、道具获取环境信息，建模战场态势
• 多样化战术风格，丰富的环境陈设与数十种道具，实现关卡个性化解法`,
        media: [
            { type: 'image', src: `${BASE}/PostTreatment/PostTreatment_post.png` },
            { type: 'video', src: `${BASE}/PostTreatment/壹步之遥.mp4` },
            { type: 'image', src: `${BASE}/PostTreatment/whole.png` },
            { type: 'image', src: `${BASE}/PostTreatment/体术制服.png` },
            { type: 'image', src: `${BASE}/PostTreatment/多重感官结合.png` },
            { type: 'image', src: `${BASE}/PostTreatment/掀翻桌子作为掩体.png` },
            { type: 'image', src: `${BASE}/PostTreatment/攻击动作.png` },
        ]
    },

    streamgame: {
        title: '山里老艺人的直播间',
        role: '独立开发',
        intro: `这是一个模拟的直播间，主播并非人类而是大语言模型+VLA，前者用于接收弹幕要求，后者用于操控游戏。

观众可以选择为AI主播打赏，打赏的赏金来源并非真实的金钱，而是看广告获得的游戏内货币。AI主播接到的打赏可以直接在游戏内使用，亦或是获得打赏的游戏内道具。

为保证直播内容的有趣，直播中游戏的也是经过精心设计的。它更注重内生规则，让游戏自己把自己玩起来。游戏中会有森林区域，森林区域有老虎、牛、野人三种生物，其中老虎会主动攻击牛，而牛会追逐生菜且攻击拿着番茄的玩家。再比如，村庄区域，会有农夫和警察，玩家可以选择购买或偷窃农夫的商品，但是会因此被警察通缉。而警察是可以被贿赂的，被通缉、被捕、被捕后的价格都有所不同。

观众的弹幕要求可以是多样的，如获得生日祝福、要一个汉堡（此处致敬Live4Burger）、进行20次偷窃等等。弹幕过多会导致大模型"目不暇接"，此时就需要通过刷礼物、打赏甚至醒目留言让AI主播更容易看到。

该游戏复刻了直播间的完整生态，包括弹幕列表、礼物系统、公告与评论、后台管理等。

这是一个实验性游戏，也是一个商业化的尝试，开发者可以依靠接单广告甚至直接打赏来盈利。`,
        media: [
            { type: 'image', src: `${BASE}/StreamGame/StreamGame_post.png` },
            { type: 'image', src: `${BASE}/StreamGame/直播画面.png` },
            { type: 'image', src: `${BASE}/StreamGame/登录界面.png` },
            { type: 'image', src: `${BASE}/StreamGame/大模型接口.png` },
            { type: 'image', src: `${BASE}/StreamGame/礼物打赏.png` },
            { type: 'image', src: `${BASE}/StreamGame/管理界面.png` },
        ]
    }
};

// --- DOM refs ---
const modal = document.getElementById('gallery-modal');
const modalText = document.getElementById('modal-text');
const mediaMain = document.getElementById('media-main');
const mediaStrip = document.getElementById('media-strip');
const mediaCaption = document.getElementById('media-caption');
const mediaPrev = document.getElementById('media-prev');
const mediaNext = document.getElementById('media-next');
const modalBg = modal.querySelector('.modal__bg');
const modalX = modal.querySelector('.modal__x');

let curProject = null;
let curIdx = 0;

// --- Open modal ---
function openModal(key) {
    const p = projects[key];
    if (!p) return;

    curProject = key;
    curIdx = 0;

    modalText.textContent = p.intro;

    buildThumbs(p.media);
    showMedia(0);

    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
}

// --- Build thumbnail strip ---
function buildThumbs(media) {
    mediaStrip.innerHTML = '';

    media.forEach((item, i) => {
        const thumb = document.createElement('div');
        thumb.className = 'media__thumb';

        if (item.type === 'video') {
            thumb.classList.add('media__thumb--video');
        } else {
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = '';
            img.loading = 'lazy';
            thumb.appendChild(img);
        }

        thumb.addEventListener('click', () => showMedia(i));
        thumb.setAttribute('data-index', i);
        mediaStrip.appendChild(thumb);
    });
}

// --- Caption helpers ---
function fileName(path) {
    const parts = path.replace(/\\/g, '/').split('/');
    const name = parts[parts.length - 1];
    return name.replace(/\.[^.]+$/, '');
}

// --- Show media at index ---
function showMedia(i) {
    const p = projects[curProject];
    if (!p || i >= p.media.length) return;

    curIdx = i;
    const item = p.media[i];

    mediaMain.innerHTML = '';

    if (item.type === 'video') {
        const video = document.createElement('video');
        video.src = item.src;
        video.controls = true;
        video.style.display = 'block';
        video.style.maxWidth = '100%';
        video.style.maxHeight = '100%';
        mediaMain.appendChild(video);
        mediaCaption.textContent = '▶ ' + fileName(item.src);
    } else {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = '';
        img.style.display = 'block';
        mediaMain.appendChild(img);
        mediaCaption.textContent = (i === 0) ? p.title : fileName(item.src);
    }

    // Update thumb active states
    const thumbs = mediaStrip.querySelectorAll('.media__thumb');
    thumbs.forEach((t, j) => {
        t.classList.toggle('media__thumb--active', j === i);
    });

    // Scroll thumb into view
    if (thumbs[i]) {
        thumbs[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

// --- Close modal ---
function closeModal() {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
    mediaMain.innerHTML = '';
    curProject = null;
}

modalX.addEventListener('click', closeModal);
modalBg.addEventListener('click', closeModal);

// Prevent closing when clicking inside the box
modal.querySelector('.modal__box').addEventListener('click', (e) => {
    e.stopPropagation();
});

// --- Arrow buttons ---
function navMedia(dir) {
    if (!curProject) return;
    const len = projects[curProject].media.length;
    showMedia((curIdx + dir + len) % len);
}

mediaPrev.addEventListener('click', (e) => { e.stopPropagation(); navMedia(-1); });
mediaNext.addEventListener('click', (e) => { e.stopPropagation(); navMedia(1); });

// --- Keyboard ---
document.addEventListener('keydown', (e) => {
    if (!curProject) return;
    const len = projects[curProject].media.length;

    if (e.key === 'Escape') {
        closeModal();
    } else if (e.key === 'ArrowLeft') {
        navMedia(-1);
    } else if (e.key === 'ArrowRight') {
        navMedia(1);
    }
});

// --- Bind project cards ---
document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('click', () => {
        const key = card.dataset.project;
        if (key) openModal(key);
    });
});

// --- Intersection Observer for scroll reveal ---
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.proj-card, .dl-card, .game-cat, .sec-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    revealObserver.observe(el);
});

// Reveal elements already in view on load
setTimeout(() => {
    document.querySelectorAll('.proj-card, .dl-card, .game-cat, .sec-card').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
}, 120);
