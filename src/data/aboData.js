export default {
  heading: 'ABO心理性别测试',
  headingSmall: '自己内心到底是男人还是女人？',
  description: '剑桥大学的Simon Cohen教授进行的研究表明，并非所有的男性都有一个典型的「男式」大脑。差不多每五个男性中就有一个大脑是「女式」的，所以也难怪为什么有些男人会喜欢芭蕾胜过喜欢足球。最近国外有个红爆网络的ABO心理性别测验，能够以短短十题便知道在你内心居住的是「男人魂」还是「女人魂」，据说结果非常准喔！就算这个心理测验结果出来的是另一个性别，也或是一件好事呢，快来一起测测你的内心性别吧。',
  list: [
    {
      no: 1,
      que: '拥有属于自己的计算机的时候，你会精心挑选',
      choice: [
        {
          answer: '显示器',
          to: 2,
        },
        {
          answer: '键盘',
          to: 3,
        },
        {
          answer: '鼠标',
          to: 4,
        },
      ],
    },
    {
      no: 2,
      que: '通常你会什么时候开始换夏装',
      choice: [
        {
          answer: '按日历节气来换',
          to: 3,
        },
        {
          answer: '春天快结束的时候',
          to: 5,
        },
        {
          answer: '热的不得不换衣服的时候',
          to: 4,
        },
      ],
    },
    {
      no: 3,
      que: '自己一个人的时候，你的坐姿是',
      choice: [
        {
          answer: '双腿并拢在一起换',
          to: 6,
        },
        {
          answer: '双腿叉开',
          to: 4,
        },
        {
          answer: '翘二郎腿',
          to: 5,
        },
      ],
    },
    {
      no: 4,
      que: '遇到自己喜欢的人，你会',
      choice: [
        {
          answer: '等着对方和自己告白',
          to: 5,
        },
        {
          answer: '单恋对方',
          to: 6,
        },
        {
          answer: '第一时间主动告白',
          to: 7,
        },
      ],
    },
    {
      no: 5,
      que: '你最喜欢什么材料的衣服',
      choice: [
        {
          answer: '丝绸',
          to: 6,
        },
        {
          answer: '纱料',
          to: 7,
        },
        {
          answer: '棉布料',
          to: 8,
        },
      ],
    },
    {
      no: 6,
      que: '自己做饭后，通常厨房什么样子',
      choice: [
        {
          answer: '乱的惨不忍睹',
          to: 7,
        },
        {
          answer: '非常整洁干净',
          to: 8,
        },
        {
          answer: '有一点点凌乱',
          to: 9,
        },
      ],
    },
    {
      no: 7,
      que: '你觉得历史战争电视剧对你来说',
      choice: [
        {
          answer: '特别帅',
          to: 8,
        },
        {
          answer: '很无语',
          to: 9,
        },
        {
          answer: '特别有吸引力',
          to: 10,
        },
      ],
    },
    {
      no: 8,
      que: '每次出门的时候，你最注意的是',
      choice: [
        {
          answer: '自己是不是带了想带的东西',
          to: 9,
        },
        {
          answer: '自己的味道',
          to: 10,
        },
        {
          answer: '自己的发型和着装',
          to: 'B',
        },
      ],
    },
    {
      no: 9,
      que: '你认为工作套装或西服给你的感觉是',
      choice: [
        {
          answer: '庄重的服饰',
          to: 'D',
        },
        {
          answer: '过于拘谨的服饰',
          to: 'E',
        },
        {
          answer: '美丽的服饰',
          to: 'A',
        },
      ],
    },
    {
      no: 10,
      que: '拥有自己的房子时，你会选什么颜色',
      choice: [
        {
          answer: '红色',
          to: 'B',
        },
        {
          answer: '白色',
          to: 'C',
        },
        {
          answer: '紫色',
          to: 'D',
        },
      ],
    },
  ],
  result: {
    A: {
      title: 'A型-女性Omega（强女性）',
      des1: '你的内心住这一个非常女性的灵魂，从你生活的细节中可以透露出强烈的女性特质。譬如你并是一个不愿意大声说话的人，也并不喜欢别人对你大声呼喝，从性格上讲有些软弱且容易犹豫。而且对你来说，没有被完美策划好的事情是不应该执行的。',
      des2: '只要你认为相关事情是有风险和需要赌运气的话，则都不会在你的选择里。也因着内心的强烈「女人魂」，你总期待被别人保护、肯定，期待有人可以对你说：「我来负责你的全部」。',
    },
    B: {
      title: 'B型-男性Omega（弱女性）',
      des1: '你的灵魂带着一点女性色彩，但并不是十分明显。你渴望一个和谐、没有是非的生活，那个被大家传说这的和平世界是你最期待的。当与他人产生矛盾，无论这些人是你熟悉的或者不熟悉的，你都会感到非常困扰且想逃避。',
      des2: '虽然你有着理智的思维，也懂得很多大道理，但是生活中的你不喜欢花费精力与人争取自己的想法，故你倾向抱着得过且过的思想生活，不涉及原则问题不会和别人争论。',
    },
    C: {
      title: 'C型-中性Beta',
      des1: '你的灵魂非常中性，故你在外在打扮和行为举止上时而偏男性、时而偏女性。你讨厌一成不变的生活模式，并希望用不同的样子去过每一天。',
      des2: '在你的心中，虽然没有绝对的羡慕相反性别的人，但是你不甘心自己守着自己的「性别条例」。不愿意服输的你会尝试着相反性别的人的言行举止，因为有尝试及活出强烈的自我色彩的生活，对你来说才叫生活的意义呢。',
    },
    D: {
      title: 'D型-女性Alpha（弱男性）',
      des1: '你的灵魂会偏向男性一些。你在外人面前总是表现得很坚强，无论遇到什么情况，都尽量用冷静去掩盖自己的不安。',
      des2: '你习惯于隐藏自己的弱点，总是尽力表现出优秀的特质，希望可以得到其他人的肯定。而只有在信任的人面前，你才会把心事透露出去。',
    },
    E: {
      title: 'E型-男性Alpha（强男性）',
      des1: '你拥有着非常强烈的男性灵魂。也就是说，无论言语、思想抑或行动，你都是一个彻头彻尾的强者。你的内心不但希望能够控制自己的命运，还希望能够掌控别人的命运。',
      des2: '富有责任感的你总会扮演保护者的角色，希望用自己的能力和努力来让所爱的家人获得更好的生活。但有时还是要小心避免显得过于强势和自我喔！',
    },
  },
  text: '科普：ABO分别代表Alpha,Beta和Omega，概念源于狼族的社会阶级模式：牠们的社会组织主要是由一对属于最高阶级的Alpha公狼和母狼担任领导者；并由一对此高级的Beta公狼和母狼担任这个组织的中坚份子；而处在这个组织的最低阶级的狼群称为Omega。',
};
