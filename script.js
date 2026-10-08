(() => {
  'use strict';

  const TYPES = [
    { code: 'R', name: 'Hands-on & Technical', color: '#4b83ad', description: 'You may enjoy practical work, using tools, and seeing a clear result from your effort.', focus: ['Practical problem-solving', 'Tools and equipment', 'Building and repairing'], fields: ['Agriculture', 'Animal Service', 'Athletics', 'Construction/Woodwork', 'Engineering', 'Mechanics/Electronics', 'Nature/Outdoors', 'Physical/Manual Labor', 'Protective Service', 'Transportation/Machine Operation'], studies: ['Engineering', 'Applied sciences', 'Agriculture and environmental studies', 'Technical and vocational programs'] },
    { code: 'I', name: 'Scientific & Analytical', color: '#8069b4', description: 'You may enjoy asking questions, studying evidence, and working out how things connect.', focus: ['Research and discovery', 'Evidence and analysis', 'Complex questions'], fields: ['Health Care Service', 'Humanities', 'Life Science', 'Mathematics/Statistics', 'Medical Science', 'Physical Science', 'Social Science'], studies: ['Biology and chemistry', 'Mathematics and data science', 'Medicine and public health', 'Psychology and social sciences'] },
    { code: 'A', name: 'Creative & Design', color: '#c35d83', description: 'You may enjoy imagining possibilities and expressing ideas through design, stories, or performance.', focus: ['Creative expression', 'Design and communication', 'Original ideas'], fields: ['Applied Arts and Design', 'Creative Writing', 'Culinary Art', 'Humanities', 'Marketing/Advertising', 'Media', 'Music', 'Performing Arts', 'Visual Arts'], studies: ['Visual communication and design', 'Architecture', 'Writing and media', 'Fine and performing arts'] },
    { code: 'S', name: 'Helping & Community', color: '#428b78', description: 'You may enjoy supporting people, helping others learn, and contributing to a community.', focus: ['Teaching and learning', 'Listening and support', 'Community wellbeing'], fields: ['Animal Service', 'Culinary Art', 'Health Care Service', 'Human Resources', 'Personal Service', 'Professional Advising', 'Religious Activities', 'Social Science', 'Social Service', 'Teaching/Education'], studies: ['Education', 'Counseling and psychology', 'Nursing and allied health', 'Social work and community development'] },
    { code: 'E', name: 'Business & Leadership', color: '#c7833d', description: 'You may enjoy bringing people together, sharing ideas, and turning plans into action.', focus: ['Leadership and initiative', 'Communication and persuasion', 'Planning and decisions'], fields: ['Athletics', 'Business Initiatives', 'Finance', 'Law', 'Management/Administration', 'Marketing/Advertising', 'Politics', 'Professional Advising', 'Religious Activities', 'Sales'], studies: ['Business administration', 'Marketing and communications', 'Finance and economics', 'Hospitality and management'] },
    { code: 'C', name: 'Data & Organization', color: '#6682a5', description: 'You may enjoy creating order, keeping information accurate, and making processes dependable.', focus: ['Organization and accuracy', 'Information and systems', 'Reliable processes'], fields: ['Accounting', 'Finance', 'Human Resources', 'Information Technology', 'Mathematics/Statistics', 'Office Work'], studies: ['Accounting and finance', 'Information systems', 'Supply chain and logistics', 'Business administration'] }
  ];

  // Eight statements for each interest area. Ratings are converted to a 0–100 score.
  const ITEMS = {
  R: [
    'ပစ္စည်းတစ်ခုခု ပျက်သွားရင် အတွင်းထဲမှာ ဘာဖြစ်သွားတာလဲဆိုတာ ဖြုတ်ကြည့်ချင်တယ်။',
    'မမြင်ဖူးတဲ့ ကိရိယာ သို့မဟုတ် စက်ပစ္စည်းကို စမ်းသုံးကြည့်ပြီး ဘယ်လိုအလုပ်လုပ်လဲဆိုတာ လေ့လာချင်တယ်။',
    'လက်တွေ့ပစ္စည်းတွေကို သုံးပြီး တစ်ခုခုကို ကိုယ်တိုင် ပြုလုပ်ရတာကို ကြိုက်တယ်။',
    'အိမ်မှာ ပစ္စည်းတစ်ခုခု ပျက်သွားရင် သူများဆီ မပို့ဘဲ ကိုယ်တိုင် စစ်ဆေးပြင်ဆင်ကြည့်ချင်တယ်။',
    'စာပဲ ဖတ်နေရတာထက် ကိုယ်တိုင် လှုပ်ရှားစမ်းသပ်လို့ရတဲ့ သင်ခန်းစာ/လှုပ်ရှားမှုတွေကို ပိုကြိုက်တယ်။',
    'ပရောဂျက်တစ်ခုလုပ်ဖို့ ဘယ်ပစ္စည်းက အကောင်းဆုံးလဲဆိုတာ မတူညီတဲ့ ပစ္စည်းတွေကို စမ်းသပ်ကြည့်ရတာကို သဘောကျတယ်။',
    'ပစ္စည်းတွေကို ဖြုတ်ကြည့်၊ စမ်းသပ်ကြည့်ပြီး ပြန်တပ်ရတာကို စိတ်ဝင်စားတယ်။',
    'စားပွဲမှာ တစ်နေကုန် ထိုင်နေရတာထက် သွားလာလှုပ်ရှားပြီး ပစ္စည်းတွေနဲ့ အလုပ်လုပ်ရတာကို ပိုကြိုက်တယ်။'
  ],
  I: [
    'လူတွေ ပြောတာ မတူတဲ့အခါ ဘယ်သူ့စကားက အမှန်လဲဆိုတာ အထောက်အထား ရှာကြည့်ချင်တယ်။',
    'စမ်းသပ်မှုတစ်ခုမှာ မမျှော်လင့်ထားတဲ့ ရလဒ် ထွက်လာရင် ဘာကြောင့်လဲဆိုတာ အကြောင်းရင်း ရှာချင်တယ်။',
    'အချက်အလက် အများကြီးထဲကနေ ပုန်းကွယ်နေတဲ့ အကြောင်းအရာ သို့မဟုတ် ဆက်စပ်မှုတွေကို ရှာရတာကို ကြိုက်တယ်။',
    'လွယ်လွယ်နဲ့ အဖြေမရနိုင်တဲ့ ခက်ခဲတဲ့ ပဟေဠိ/မေးခွန်းတွေကို အချိန်ပေးပြီး အဖြေရှာရတာကို သဘောကျတယ်။',
    'ကိစ္စတစ်ခုခု ဖြစ်ပျက်သွားရင် ဒါဟာ "ဘာကြောင့်" နဲ့ "ဘယ်လို" ဖြစ်ရတာလဲဆိုတာ သိချင်စိတ် ရှိတယ်။',
    'အဖြေပေါင်းများစွာ ရှိနေရင် မှန်ကန်တဲ့အဖြေ ရဖို့အတွက် အားလုံးကို စမ်းသပ်ကြည့်ရတာကို ကြိုက်တယ်။',
    'အကြောင်းအရာတစ်ခုကို အသေးစိတ် လေ့လာ၊ အချက်အလက်တွေကို ယှဉ်ကြည့်ပြီး ကိုယ်ပိုင် ရှင်းပြချက် ထုတ်ရတာကို သဘောကျတယ်။',
    'ထူးဆန်းတဲ့ သတင်း သို့မဟုတ် အချက်အလက်တစ်ခု ကြားရင် မယုံမှီ မူလအရင်းအမြစ်ကို အရင် စစ်ဆေးချင်တယ်။'
  ],
  A: [
    'ရိုးရိုး အခန်းတစ်ခန်းကို အရောင်တွေ၊ အပြင်အဆင်တွေနဲ့ လှပဆန်းသစ်သွားအောင် ပြောင်းလဲရတာကို ကြိုက်တယ်။',
    'သူများတွေ မစဉ်းစားမိတဲ့ ထူးခြားဆန်းသစ်တဲ့ အိုင်ဒီယာနဲ့ ဖြေရှင်းနည်းတွေကို ရှာရတာ စိတ်ဝင်စားတယ်။',
    'တိကျတဲ့ နည်းလမ်းတွေ မရှိဘဲ မိမိစိတ်ကူးအတိုင်း လွတ်လပ်စွာ ဖန်တီးရတာကို သဘောကျတယ်။',
    'နေ့စဉ်သုံး ပစ္စည်းတွေကို ပိုပြီး စိတ်ဝင်စားဖို့ကောင်းအောင် သို့မဟုတ် လှပအောင် ပြန်ဒီဇိုင်းဆွဲရတာ ကြိုက်တယ်။',
    'ရုပ်ရှင် သို့မဟုတ် ဂိမ်း ကြည့်တဲ့အခါ ရုပ်ပုံ၊ အသံနဲ့ ရိုက်ကွက်တွေကို ဘယ်လိုဖန်တီးထားလဲဆိုတာ သတိပြုမိတယ်။',
    'ခေါင်းထဲက စိတ်ကူးတွေကို ပန်းချီ၊ ဗီဒီယို၊ ပုံပြင် သို့မဟုတ် ဒီဇိုင်းအဖြစ် ပြောင်းလဲရတာကို သဘောကျတယ်။',
    'အဖြေတစ်ခုတည်း မဟုတ်ဘဲ ကိုယ်ပိုင် စိတ်ကူးတွေကို သုံးလို့ရတဲ့ ပရောဂျက်တွေကို ပိုကြိုက်တယ်။',
    'ဒီဇိုင်းတစ်ခုက အခြားဒီဇိုင်းထက် ဘာကြောင့် ပိုလှသလဲ၊ ပိုဆွဲဆောင်မှုရှိသလဲဆိုတာ စဉ်းစားရတာ ကြိုက်တယ်။'
  ],
  S: [
    'သူငယ်ချင်းတစ်ယောက် ကိစ္စတစ်ခုကို နားမလည်တဲ့အခါ နားလည်အောင် အခြားနည်းနဲ့ ရှင်းပြပေးချင်တယ်။',
    'သူငယ်ချင်းက ပြဿနာ ကြုံနေရရင် သူ့ဘက်က စာနာပြီး သေချာ နားထောင်ပေးချင်တယ်။',
    'ကျောင်းသား/ကလေးတွေကို ဂိမ်းတွေ၊ လှုပ်ရှားမှုတွေနဲ့ ပျော်ပျော်ရွှင်ရွှင် သင်ပေးရတာကို သဘောကျတယ်။',
    'အဖွဲ့ထဲမှာ နားလည်မှုလွဲနေကြရင် အားလုံး အဆင်ပြေအောင် ကြားကနေ ကူညီပေးချင်တယ်။',
    'သူများရဲ့ အရည်အချင်း သို့မဟုတ် ဝါသနာကို သတိပြုမိရင် ပိုတိုးတက်အောင် အားပေးချင်တယ်။',
    'စကားပြောရတာ၊ နားထောင်ပေးရတာနဲ့ လူတွေကို ကူညီပေးရတဲ့ အလုပ်မျိုးကို သဘောကျတယ်။',
    'ကိုယ်သိထားတဲ့ အကြောင်းအရာတစ်ခုကို မသိသေးတဲ့သူတွေကို သေချာ ရှင်းပြပေးရတာကို ကြိုက်တယ်။',
    'အသိုင်းအဝိုင်းထဲမှာ ပြဿနာတစ်ခုတွေ့ရင် လူတွေ စုပေါင်းပြီး ဘယ်လိုဖြေရှင်းမလဲဆိုတာ စဉ်းစားပေးချင်တယ်။'
  ],
  E: [
    'အဖွဲ့လိုက် လုပ်ရာမှာ ဘာလုပ်ရမှန်း မသိဖြစ်နေရင် အရှေ့ကနေ ဦးဆောင်ပြီး လမ်းကြောင်းပြပေးချင်တယ်။',
    'သဘောထား မတူတဲ့အခါ ကိုယ့်စိတ်ကူးကို သေချာ ရှင်းပြပြီး သူတို့ လက်ခံလာအောင် စည်းရုံးရတာကို သဘောကျတယ်။',
    'ပစ္စည်းတစ်ခုခု ရောင်းရရင် ဝယ်သူတွေ သဘောကျအောင် ဘယ်လိုဆွဲဆောင်ရမလဲ စဉ်းစားရတာ ကြိုက်တယ်။',
    'အမြင်မတူတဲ့ လူတွေကြားမှာ အားလုံး သဘောတူညီမှု ရအောင် ညှိနှိုင်းပေးရတာကို သဘောကျတယ်။',
    'အဖွဲ့လိုက် စီမံကိန်းတစ်ခုမှာ တာဝန်တွေ ခွဲပေးပြီး ပန်းတိုင်ရောက်အောင် ဦးဆောင်ရတာကို ကြိုက်တယ်။',
    'ကိုယ့်ရဲ့ စိတ်ကူး/အိုင်ဒီယာကို အခြားသူတွေကို တင်ပြပြီး ထောက်ခံမှုရအောင် လုပ်ရတာကို သဘောကျတယ်။',
    'ပစ္စည်း သို့မဟုတ် ဝန်ဆောင်မှုတစ်ခုကို ပိုကောင်းအောင် လုပ်ပြီး လူတွေဆီ မိတ်ဆက်ပေးရတာကို ကြိုက်တယ်။',
    'ခိုင်းတာတစ်ခုတည်း လုပ်နေရတာထက် တာဝန်မျိုးစုံ ပေါင်းစပ်ညှိနှိုင်းပေးပြီး ဆုံးဖြတ်ချက်ချရတာကို ပိုကြိုက်တယ်။'
  ],
  C: [
    'ရှုပ်ပွနေတဲ့ ဖိုင်တွေ၊ စာရွက်စာတမ်းတွေကို စနစ်တကျ ပြန်စီစဉ်ရတာကို သဘောကျတယ်။',
    'သူများတွေ လွတ်သွားတဲ့ အမှားသေးသေးလေးတွေကို သတိထားမိပြီး သေချာ ပြန်ပြင်ချင်တယ်။',
    'များပြားလှတဲ့ အချက်အလက်တွေကို စည်းမျဉ်းအတိုင်း အုပ်စုလိုက် သေချာ ခွဲခြားရတာကို ကြိုက်တယ်။',
    'လူတိုင်း စနစ်တကျ လိုက်လုပ်နိုင်မယ့် လွယ်ကူတဲ့ အဆင့်အလိုက် ညွှန်ကြားချက်တွေကို ဖန်တီးပေးရတာ ကြိုက်တယ်။',
    'စာရင်းအင်းတွေနဲ့ ကိန်းဂဏန်း အမှားပါမပါ စစ်ဆေးရတဲ့ အလုပ်တွေကို စိတ်ရှည်လက်ရှည် လုပ်နိုင်တယ်။',
    'ပွဲတစ်ခုလုပ်ရင် ရက်စွဲ၊ လူစာရင်း၊ အချိန်ဇယားနဲ့ အသုံးစရိတ်တွေကို မှတ်တမ်းတင် စီစဉ်ရတာကို သဘောကျတယ်။',
    'တိကျတဲ့ စည်းမျဉ်းများ သို့မဟုတ် စနစ်များကို လိုက်နာရင်း ပြဿနာများကို ဖြေရှင်းရတာကို သဘောကျတယ်။',
    'အရေးကြီးတဲ့ စာရွက်စာတမ်း သို့မဟုတ် အချက်အလက်တွေကို မပျောက်မပျက်အောင် သေချာ သိမ်းဆည်းထားချင်တယ်။'
  ]
};

const OPTIONS = [
  { label: 'လုံးဝ မဟုတ်ပါ', value: 1 },
  { label: 'နည်းနည်း ဟုတ်တယ်', value: 2 },
  { label: 'အတော်အတန် ဟုတ်တယ်', value: 3 },
  { label: 'အများအားဖြင့် ဟုတ်တယ်', value: 4 },
  { label: 'အမှန်ဆုံး/ကွက်တိပဲ', value: 5 }
];

  const QUESTION_BANK = TYPES.flatMap(type => ITEMS[type.code].map(text => ({ ...type, text })));
  let questions = [];
  const screens = { home: document.querySelector('#home'), quiz: document.querySelector('#quiz'), results: document.querySelector('#results') };
  const answers = new Array(QUESTION_BANK.length).fill(null);
  let current = 0;

  const showScreen = name => {
    Object.entries(screens).forEach(([key, el]) => { el.hidden = key !== name; });
    document.body.dataset.screen = name;
  };
  const shuffle = items => { for (let i = items.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [items[i], items[j]] = [items[j], items[i]]; } return items; };
  const start = () => { current = 0; answers.fill(null); questions = shuffle([...QUESTION_BANK]); showScreen('quiz'); renderQuestion(); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  function renderQuestion() {
    const q = questions[current];
    const countText = `Question ${String(current + 1).padStart(2, '0')} / ${questions.length}`;
    document.querySelector('#question-count').textContent = countText;
    document.querySelector('#question-category').textContent = 'YOUR INTERESTS';
    document.querySelector('#question-title').textContent = q.text;

    // Announce question change to assistive technology via dynamic live region
    const announcer = document.querySelector('#a11y-announcer');
    if (announcer) {
      announcer.textContent = `${countText}. ${q.text}`;
    }

    updateProgress();
    const list = document.querySelector('#answers');
    list.replaceChildren();
    OPTIONS.forEach(option => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `answer${answers[current] === option.value ? ' selected' : ''}`;
      button.setAttribute('aria-pressed', String(answers[current] === option.value));
            button.innerHTML = '<span class="answer-radio" aria-hidden="true"></span><span></span>';
      button.lastElementChild.textContent = option.label;
      button.addEventListener('click', () => {
        answers[current] = option.value;
        list.querySelectorAll('.answer').forEach(el => { el.classList.remove('selected'); el.setAttribute('aria-pressed', 'false'); });
        button.classList.add('selected'); button.setAttribute('aria-pressed', 'true');
        document.querySelector('#next-button').disabled = false;
        updateProgress();
      });
      list.append(button);
    });
    document.querySelector('#previous-button').disabled = current === 0;
    const next = document.querySelector('#next-button');
    next.textContent = current === questions.length - 1 ? 'See my results →' : 'Next →';
    next.disabled = answers[current] === null;
    document.querySelector('#question-title').focus({ preventScroll: true });
  }

  function updateProgress() {
    const completed = answers.filter(value => value !== null).length;
    const progress = document.querySelector('#progress');
    progress.setAttribute('aria-valuenow', String(completed));
    document.querySelector('#progress-fill').style.width = String((completed / questions.length) * 100) + '%';
  }

  function calculateScores() {
    const scores = {};
    TYPES.forEach(type => {
      let sum = 0, count = 0;
      questions.forEach((question, index) => { if (question.code === type.code) { sum += answers[index]; count++; } });
      scores[type.code] = count ? ((sum - count) / (count * 4)) * 100 : 0;
    });
    return scores;
  }

  // Ties and gaps use exact percentages; rounding is only for display.
  function classify(scores) {
    const sorted = TYPES.map(t => ({ ...t, score: scores[t.code] })).sort((a, b) => b.score - a.score || a.code.localeCompare(b.code));
    const groups = [];
    sorted.forEach(item => {
      const group = groups[groups.length - 1];
      if (!group || group[0].score !== item.score) groups.push([item]); else group.push(item);
    });
    const first = groups[0], second = groups[1], third = groups[2];
    if (first.length > 3) return { kind: 'broad-all', groups: [{ role: 'Balanced Interest Profile', items: sorted }] };
    if (first.length === 3) return { kind: 'three-primary', groups: [{ role: 'Core Interest Profile', items: first }] };
    if (first.length === 2) {
      const result = [{ role: 'Dual primary · equal importance', items: first }];
      if (second && first[0].score - second[0].score <= 15) {
        result.push({ role: second.length === 1 ? 'Secondary interest' : 'Shared secondary interests', items: second });
      }
      return { kind: 'dual-primary', groups: result };
    }
    const primary = first[0];
    if (!second) return { kind: 'single-primary', groups: [{ role: 'Primary interest', items: [primary] }] };
    const gap12 = primary.score - second[0].score;
    if (gap12 > 15) return { kind: 'primary-only-gap', groups: [{ role: 'Primary interest', items: [primary] }] };
    if (second.length >= 3) return { kind: 'broad-secondary', groups: [
      { role: 'Primary interest', items: [primary] }, { role: 'Broad secondary interests', items: second }
    ] };
    if (second.length === 2) return { kind: 'shared-secondary', groups: [
      { role: 'Primary interest', items: [primary] }, { role: 'Shared secondary', items: second }
    ] };
    if (!third) return { kind: 'primary-secondary', groups: [
      { role: 'Primary interest', items: [primary] }, { role: 'Secondary interest', items: second }
    ] };
    const gap23 = second[0].score - third[0].score;
    const groupsOut = [{ role: 'Primary interest', items: [primary] }, { role: 'Secondary interest', items: second }];
    if (gap23 <= 10) groupsOut.push({ role: 'Supporting interest', items: third });
    return { kind: 'ranked', groups: groupsOut };
  }

  function summaryFor(result) {
    switch (result.kind) {
      case 'broad-all': 
        return 'သင့်မှာ ထင်ရှားတဲ့ စိတ်ဝင်စားမှု တစ်ခုတည်းရယ်လို့ သီးသန့်မရှိပါဘူး။ နယ်ပယ်မျိုးစုံကို လေ့လာကြည့်ဖို့ အကြံပြုချင်ပါတယ်။';
      
      case 'three-primary': 
        return 'သင့်မှာ အမြင့်ဆုံး အဓိကစိတ်ဝင်စားမှု ၃ ခု ရှိနေပါတယ်။';
      
      case 'dual-primary':
        if (result.groups.length === 1) return 'သင့်မှာ အမြင့်ဆုံး အဓိကစိတ်ဝင်စားမှု ၂ ခု ရှိနေပါတယ်။';
        return result.groups[1].items.length === 1
          ? 'သင့်မှာ အမြင့်ဆုံး အဓိကစိတ်ဝင်စားမှု ၂ ခုနဲ့ အနီးစပ်ဆုံး ဒုတိယစိတ်ဝင်စားမှု ၁ ခု ရှိပါတယ်။'
          : 'သင့်မှာ အမြင့်ဆုံး အဓိကစိတ်ဝင်စားမှု ၂ ခုရှိပြီး အနီးစပ်ဆုံး ဒုတိယစိတ်ဝင်စားမှုများလည်း ပါဝင်နေပါတယ်။';
      case 'shared-secondary': 
        return 'သင့်မှာ အဓိကစိတ်ဝင်စားမှု ၁ ခုနဲ့ အနီးစပ်ဆုံး ဒုတိယ စိတ်ဝင်စားမှု ၂ ခု ရှိနေပါတယ်။';
      
      case 'broad-secondary': 
        return 'သင့်မှာ အဓိကစိတ်ဝင်စားမှု ၁ ခုအပြင် အနီးစပ်ဆုံး ဒုတိယ စိတ်ဝင်စားမှု အများအပြား ရှိနေပါတယ်။';
      
      case 'primary-only-gap': 
        return 'သင့်မှာ အဓိကစိတ်ဝင်စားမှု ၁ ခုပဲ ထင်ထင်ရှားရှား ရှိနေပါတယ်';
      
      case 'primary-secondary': 
        return 'သင့်မှာ အဓိကစိတ်ဝင်စားမှု ၁ ခုနဲ့ အနီးစပ်ဆုံး ဒုတိယ စိတ်ဝင်စားမှု ၁ ခု ရှိပါတယ်။';
      
      case 'ranked': 
        return result.groups.length === 3 
          ? 'သင့်ရလဒ်မှာ အဓိက၊ ဒုတိယနဲ့ အရံ စိတ်ဝင်စားမှုနယ်ပယ်ဆိုပြီး အစဉ်လိုက် ထွက်လာပါတယ်။' 
          : 'သင့်ရလဒ်မှာ အဓိကနဲ့ ဒုတိယ စိတ်ဝင်စားမှုနယ်ပယ် ထွက်လာပါတယ်။';
      
      case 'single-primary': 
        return 'သင့်မှာ အဓိက ဦးဆောင်နေတဲ့ စိတ်ဝင်စားမှု ၁ ခု ရှိပါတယ်။';
      
      default: 
        return 'ဒီရလဒ်က သင့်အဖြေတွေပေါ် အခြေခံထားတာ ဖြစ်ပါတယ်။';
    }
  }

  function showResults() {
    const scores = calculateScores();
    const result = classify(scores);
    const resultAreas = result.groups.flatMap(group => group.items);

    const chart = document.querySelector('#score-chart');
    chart.replaceChildren();
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('class', 'line-chart-svg');
    svg.setAttribute('viewBox', '0 0 760 340');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-labelledby', 'score-chart-title score-chart-desc');
    const svgText = (tag, attrs, content) => {
      const element = document.createElementNS(svgNS, tag);
      Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
      if (content !== undefined) element.textContent = content;
      return element;
    };
    svg.append(
      svgText('title', { id: 'score-chart-title' }, 'Six-category interest score line chart'),
      svgText('desc', { id: 'score-chart-desc' }, TYPES.map(type => `${type.code} – ${type.name}: ${Math.round(scores[type.code])}%`).join('. '))
    );
    const left = 52, right = 738, top = 28, bottom = 238;
    [0, 25, 50, 75, 100].forEach(tick => {
      const y = bottom - (tick / 100) * (bottom - top);
      svg.append(svgText('line', { x1: left, y1: y, x2: right, y2: y, class: 'chart-gridline' }));
      svg.append(svgText('text', { x: left - 12, y: y + 4, class: 'chart-axis-label', 'text-anchor': 'end' }, `${tick}%`));
    });
    const points = TYPES.map((type, index) => ({
      type,
      score: Math.round(scores[type.code]),
      x: left + index * ((right - left) / (TYPES.length - 1)),
      y: bottom - (scores[type.code] / 100) * (bottom - top)
    }));
    svg.append(svgText('polyline', {
      points: points.map(point => `${point.x},${point.y}`).join(' '),
      class: 'chart-line'
    }));
    points.forEach(({ type, score, x, y }) => {
      svg.append(svgText('circle', { cx: x, cy: y, r: 7, class: 'chart-point', fill: type.color }));
      svg.append(svgText('text', { x, y: y - 13, class: 'chart-point-value', 'text-anchor': 'middle' }, `${score}%`));
      svg.append(svgText('text', { x, y: 266, class: 'chart-category-code', 'text-anchor': 'middle' }, type.code));
      const name = svgText('text', { x, y: 284, class: 'chart-category-name', 'text-anchor': 'middle' });
      const words = type.name.split(' ');
      const split = Math.ceil(words.length / 2);
      name.append(
        svgText('tspan', { x, dy: 0 }, words.slice(0, split).join(' ')),
        svgText('tspan', { x, dy: 13 }, words.slice(split).join(' '))
      );
      svg.append(name);
    });
    chart.append(svg);
    chart.setAttribute('aria-label', 'Line chart of scores across six interest areas. Each category is identified by its RIASEC letter and plain-language description.');
    document.querySelector('#assessment-date').textContent = 'Assessment date: ' + new Intl.DateTimeFormat(undefined, { dateStyle: 'long' }).format(new Date());
    document.querySelector('#result-summary').textContent = summaryFor(result);
    const broadReport = document.querySelector('#broad-report');
    const broadReportTitle = document.querySelector('#broad-report-title');
    const broadReportCopy = document.querySelector('#broad-report-copy');
    const hasBroadDualProfile = result.kind === 'dual-primary' && result.groups[1] && result.groups[1].items.length >= 3;
    const isBroadProfile = result.kind === 'broad-all' || result.kind === 'three-primary' || result.kind === 'broad-secondary' || hasBroadDualProfile;
    broadReport.hidden = !isBroadProfile;
    document.querySelector('#study-section').hidden = isBroadProfile;
    document.querySelector('#career-section').hidden = isBroadProfile;
    if (isBroadProfile) {
      broadReportTitle.textContent = result.kind === 'broad-all'
        ? 'Your interests cover a broad range'
        : result.kind === 'three-primary'
          ? 'Three interests share the lead'
          : hasBroadDualProfile
            ? 'Two leading interests, with a broad range alongside them'
            : 'One leading interest, with a broad range alongside it';
      broadReportCopy.textContent = result.kind === 'broad-all'
        broadReportCopy.textContent = result.kind === 'broad-all'
    ? 'သင့်အဖြေတွေအရ စိတ်ဝင်စားမှုနယ်ပယ် တစ်ခုတည်းမဟုတ်ဘဲ နယ်ပယ်အများအပြားကို စိတ်ဝင်စားနေတာတွေ့ရပါတယ်။ ဒါဟာ ပုံမှန်ရလဒ်တစ်ခုဖြစ်ပြီး ကျောင်းသားအများစုဟာ အတွေ့အကြုံသစ်တွေကနေတစ်ဆင့် သူတို့နဲ့ ကိုက်ညီတာကို ရှာဖွေတွေ့ရှိလေ့ရှိကြပါတယ်။ ဒီစစ်ဆေးမှုတစ်ခုတည်းပေါ် မူတည်ပြီး တက္ကသိုလ်ဘာသာရပ် သို့မဟုတ် အလုပ်အကိုင်ကို ချက်ချင်းရွေးချယ်ဖို့ မလိုပါဘူး။ သင်တန်းသစ်တွေ၊ ပရောဂျက်တွေ၊ ကလပ်တွေ သို့မဟုတ် စေတနာ့ဝန်ထမ်း လှုပ်ရှားမှုတွေကို စမ်းလုပ်ကြည့်ရင်း ဘယ်အရာက သင့်ကို ပိုစိတ်ပါဝင်စားစေလဲဆိုတာ သတိပြုကြည့်ပါ။ သင့်စိတ်ဝင်စားမှုတွေဟာ အချိန်နဲ့အမျှ တိုးတက်ပြောင်းလဲနိုင်ပါတယ်။'
    : result.kind === 'three-primary'
      ? `သင့်ရဲ့ ထိပ်ဆုံးစိတ်ဝင်စားမှု ၃ ခုဖြစ်တဲ့ (${result.groups[0].items.map(area => area.name).join('၊ ')}) တို့ဟာ အမှတ်တူနေပါတယ်။ ဒါဟာ လက်ရှိမှာ နယ်ပယ်အများအပြားကို အမျှတူ စိတ်ဝင်စားနေတာကို ပြနေတာပါ။ ဒီစစ်ဆေးမှုပေါ် မူတည်ပြီး တစ်ခုတည်းကို အတည်မယူပါနဲ့ဦး၊ မတူညီတဲ့ သင်တန်းတွေနဲ့ လှုပ်ရှားမှုတွေကို စမ်းလုပ်ကြည့်ပြီး ဘာကို အနှစ်သက်ဆုံးလဲဆိုတာ သတိပြုကြည့်ပါ။`
      : hasBroadDualProfile
        ? `${result.groups[0].items[0].name} နဲ့ ${result.groups[0].items[1].name} တို့ဟာ သင့်ရဲ့ ထိပ်ဆုံးအမှတ်တူ စိတ်ဝင်စားမှုတွေဖြစ်ပြီး အခြား နယ်ပယ် ${result.groups[1].items.length} ခုကလည်း ကပ်လျက်မှာ ရှိနေပါတယ်။ သင်ဟာ လေ့လာမှုနဲ့ အလုပ်အကိုင် ပုံစံမျိုးစုံကို သဘောကျနိုင်ပါတယ်။ ဒီစစ်ဆေးမှုပေါ် မူတည်ပြီး တစ်ခုတည်းကို အတည်မယူပါနဲ့ဦး၊ ဒီစိတ်ဝင်စားမှုတွေကို စမ်းသပ်နိုင်မယ့် လှုပ်ရှားမှုတွေကို လုပ်ကြည့်ပြီး ဘယ်အရာက သင့်အတွက် အနှစ်သက်ဆုံးလဲဆိုတာ စောင့်ကြည့်ပါ။`
        : `သင့်အဖြေတွေအရ ${result.groups[0].items[0].name} ကို အဓိက စိတ်ဝင်စားပြီး အခြား စိတ်ဝင်စားစရာ နယ်ပယ်အများအပြားလည်း ရှိနေတာကို တွေ့ရပါတယ်။ သင်ဟာ လေ့လာမှုနဲ့ အလုပ်အကိုင် ပုံစံမျိုးစုံကို သဘောကျနိုင်တာကြောင့် ဒီစစ်ဆေးမှုပေါ် မူတည်ပြီး တစ်ခုတည်းကို အတည်မယူပါနဲ့ဦး။ ဒီစိတ်ဝင်စားမှုတွေကို လေ့လာနိုင်မယ့် လှုပ်ရှားမှုတွေကို စမ်းလုပ်ကြည့်ပြီး ဘယ်အရာက သင့်အတွက် အနှစ်သက်ဆုံးလဲဆိုတာ စောင့်ကြည့်ပါ။ ဒီကနေ သိရှိလာတာတွေကို နောင်တက်ရောက်မယ့် ပညာရေးနဲ့ အလုပ်အကိုင်တွေအတွက် စတင်ဆွေးနွေးဖို့ စမှတ်တစ်ခုအဖြစ် အသုံးပြုပါ။`;
    }    document.querySelector('#profile-label').textContent = result.kind === 'broad-all' ? 'Balanced Interest Profile' : result.kind === 'broad-secondary' ? 'Broad Interest Profile' : 'Your interests';

    const cards = document.querySelector('#profile-cards');
    cards.replaceChildren();
    let rank = 0;
    result.groups.forEach(group => group.items.forEach(item => {
      rank++;
      const card = document.createElement('article');
      card.className = 'profile-card';
      card.style.setProperty('--bar-color', item.color);
      const header = document.createElement('div');
      header.className = 'profile-card-header';
      const rankLabel = document.createElement('span');
      rankLabel.className = 'profile-rank';
      rankLabel.setAttribute('aria-hidden', 'true');
      rankLabel.textContent = item.code;
      const heading = document.createElement('div');
      heading.className = 'profile-heading';
      const role = document.createElement('span');
      role.className = 'role';
      role.textContent = group.role;
      const title = document.createElement('h3');
      title.textContent = item.name;
      heading.append(role, title);
      const score = document.createElement('span');
      score.className = 'score';
      score.textContent = Math.round(item.score) + '%';
      header.append(rankLabel, heading, score);
      const description = document.createElement('p');
      description.className = 'profile-description';
      description.textContent = item.description;
      const makeDetail = (label, values) => {
        const section = document.createElement('section');
        section.className = 'profile-detail';
        const detailTitle = document.createElement('h4');
        detailTitle.textContent = label;
        const chips = document.createElement('div');
        chips.className = 'profile-chips';
        values.forEach(value => {
          const chip = document.createElement('span');
          chip.className = 'profile-chip';
          chip.textContent = value;
          chips.append(chip);
        });
        
        section.append(detailTitle, chips);
        return section;
      };
      card.append(header, description, makeDetail('Things you may enjoy', item.focus));
      cards.append(card);
    }));

   const renderExploration = (containerId, field, heading) => {
      const container = document.querySelector(containerId);
      container.replaceChildren();
      resultAreas.forEach(area => {
        const card = document.createElement('article');
        card.className = 'exploration-card';
        card.style.setProperty('--bar-color', area.color);
        const title = document.createElement('h3');
        title.textContent = `${area.code} - ${area.name}`;
        const description = document.createElement('p');
        description.textContent = area.description;
        const subheading = document.createElement('h4');
        subheading.textContent = heading;
        const list = document.createElement('ul');
        area[field].forEach(value => {
          const item = document.createElement('li');
          item.textContent = value;
          list.append(item);
        });
        card.append(title, description, subheading, list);
        container.append(card);
      });
    };
    renderExploration('#career-cards', 'fields', 'Fields and work styles');
    renderExploration('#study-cards', 'studies', 'Programs and subjects');

    showScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector('#result-title').focus({ preventScroll: true });
  }

  document.querySelector('#start-button').addEventListener('click', start);
  document.querySelector('#previous-button').addEventListener('click', () => { if (current > 0) { current--; renderQuestion(); } });
  document.querySelector('#next-button').addEventListener('click', () => {
    if (answers[current] === null) return;
    if (current < questions.length - 1) { current++; renderQuestion(); } else showResults();
  });
  document.querySelector('#retake-button').addEventListener('click', () => { answers.fill(null); start(); });
})();