const { test } = require('@playwright/test');

test('Pos_Fun_0001 -  simple sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0001'.startsWith('Pos_UI') || 'Pos_Fun_0001'.startsWith('Neg_UI')) {
    for (const char of `mam gedhara yanawa`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `mam gedhara yanawa`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0001`);
  console.log(`Input: mam gedhara yanawa`);
  console.log(`Expected: මම ගෙදර යනවා`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0002 -  single word', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0002'.startsWith('Pos_UI') || 'Pos_Fun_0002'.startsWith('Neg_UI')) {
    for (const char of `amma`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `amma`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0002`);
  console.log(`Input: amma`);
  console.log(`Expected: අම්මා`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0003 -  greeting', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0003'.startsWith('Pos_UI') || 'Pos_Fun_0003'.startsWith('Neg_UI')) {
    for (const char of `ayubowan`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `ayubowan`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0003`);
  console.log(`Input: ayubowan`);
  console.log(`Expected: ආයුබෝවන්`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0004 -  question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0004'.startsWith('Pos_UI') || 'Pos_Fun_0004'.startsWith('Neg_UI')) {
    for (const char of `oyaata kohomadha`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `oyaata kohomadha`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0004`);
  console.log(`Input: oyaata kohomadha`);
  console.log(`Expected: ඔයාට කොහොමද`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0005 -  polite phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0005'.startsWith('Pos_UI') || 'Pos_Fun_0005'.startsWith('Neg_UI')) {
    for (const char of `bohoma sthuthi`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `bohoma sthuthi`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0005`);
  console.log(`Input: bohoma sthuthi`);
  console.log(`Expected: බොහෝම ස්තුති`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0006 -  daily activity', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0006'.startsWith('Pos_UI') || 'Pos_Fun_0006'.startsWith('Neg_UI')) {
    for (const char of `mama wada karanawa`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `mama wada karanawa`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0006`);
  console.log(`Input: mama wada karanawa`);
  console.log(`Expected: මම වැඩ කරනවා`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0007 -  food sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0007'.startsWith('Pos_UI') || 'Pos_Fun_0007'.startsWith('Neg_UI')) {
    for (const char of `mama bath kanawa`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `mama bath kanawa`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0007`);
  console.log(`Input: mama bath kanawa`);
  console.log(`Expected: මම බත් කනවා`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0008 -  travel sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0008'.startsWith('Pos_UI') || 'Pos_Fun_0008'.startsWith('Neg_UI')) {
    for (const char of `mama gamata yanawa`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `mama gamata yanawa`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0008`);
  console.log(`Input: mama gamata yanawa`);
  console.log(`Expected: මම ගමට යනවා`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0009 - emotion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0009'.startsWith('Pos_UI') || 'Pos_Fun_0009'.startsWith('Neg_UI')) {
    for (const char of `mama sathuta wenawa`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `mama sathuta wenawa`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0009`);
  console.log(`Input: mama sathuta wenawa`);
  console.log(`Expected: මම සතුටු වෙනවා`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0010 -  command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0010'.startsWith('Pos_UI') || 'Pos_Fun_0010'.startsWith('Neg_UI')) {
    for (const char of `enna`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `enna`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0010`);
  console.log(`Input: enna`);
  console.log(`Expected: එන්න`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0011 -  family term', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0011'.startsWith('Pos_UI') || 'Pos_Fun_0011'.startsWith('Neg_UI')) {
    for (const char of `thaththa`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `thaththa`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0011`);
  console.log(`Input: thaththa`);
  console.log(`Expected: තාත්තා`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0012 -  time sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0012'.startsWith('Pos_UI') || 'Pos_Fun_0012'.startsWith('Neg_UI')) {
    for (const char of `ada mama wada karanawa`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `ada mama wada karanawa`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0012`);
  console.log(`Input: ada mama wada karanawa`);
  console.log(`Expected: අද මම වැඩ කරනවා`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0013 -  location', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0013'.startsWith('Pos_UI') || 'Pos_Fun_0013'.startsWith('Neg_UI')) {
    for (const char of `gedhara`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `gedhara`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0013`);
  console.log(`Input: gedhara`);
  console.log(`Expected: ගෙදර`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0014 -  education sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0014'.startsWith('Pos_UI') || 'Pos_Fun_0014'.startsWith('Neg_UI')) {
    for (const char of `mama igena gannawa`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `mama igena gannawa`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0014`);
  console.log(`Input: mama igena gannawa`);
  console.log(`Expected: මම ඉගෙන ගන්නවා`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0015 -  future tense', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0015'.startsWith('Pos_UI') || 'Pos_Fun_0015'.startsWith('Neg_UI')) {
    for (const char of `mama heta enawa`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `mama heta enawa`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0015`);
  console.log(`Input: mama heta enawa`);
  console.log(`Expected: මම හෙට එනවා`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0016 -  past tense', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0016'.startsWith('Pos_UI') || 'Pos_Fun_0016'.startsWith('Neg_UI')) {
    for (const char of `mama awa`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `mama awa`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0016`);
  console.log(`Input: mama awa`);
  console.log(`Expected: මම ආවා`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0017 -  request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0017'.startsWith('Pos_UI') || 'Pos_Fun_0017'.startsWith('Neg_UI')) {
    for (const char of `karunakara enna`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `karunakara enna`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0017`);
  console.log(`Input: karunakara enna`);
  console.log(`Expected: කරුණාකර එන්න`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0018 -  yes/no', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0018'.startsWith('Pos_UI') || 'Pos_Fun_0018'.startsWith('Neg_UI')) {
    for (const char of `ow`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `ow`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0018`);
  console.log(`Input: ow`);
  console.log(`Expected: ඔව්`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0019 -  negation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0019'.startsWith('Pos_UI') || 'Pos_Fun_0019'.startsWith('Neg_UI')) {
    for (const char of `nae`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `nae`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0019`);
  console.log(`Input: nae`);
  console.log(`Expected: නැහැ`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0020 -  work sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0020'.startsWith('Pos_UI') || 'Pos_Fun_0020'.startsWith('Neg_UI')) {
    for (const char of `mama office yanawa`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `mama office yanawa`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0020`);
  console.log(`Input: mama office yanawa`);
  console.log(`Expected: මම ඔෆිස් යනවා`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0021 -  weather', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0021'.startsWith('Pos_UI') || 'Pos_Fun_0021'.startsWith('Neg_UI')) {
    for (const char of `ada wessa`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `ada wessa`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0021`);
  console.log(`Input: ada wessa`);
  console.log(`Expected: අද වැස්ස`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0022 -  help phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0022'.startsWith('Pos_UI') || 'Pos_Fun_0022'.startsWith('Neg_UI')) {
    for (const char of `mata udaw karanna`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `mata udaw karanna`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0022`);
  console.log(`Input: mata udaw karanna`);
  console.log(`Expected: මට උදව් කරන්න`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0023 -  sleep', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0023'.startsWith('Pos_UI') || 'Pos_Fun_0023'.startsWith('Neg_UI')) {
    for (const char of `mama nidagannawa`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `mama nidagannawa`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0023`);
  console.log(`Input: mama nidagannawa`);
  console.log(`Expected: මම නිදාගන්නවා`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_Fun_0024 -  long sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_Fun_0024'.startsWith('Pos_UI') || 'Pos_Fun_0024'.startsWith('Neg_UI')) {
    for (const char of `mama ada gedhara inna kalin bath kala`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `mama ada gedhara inna kalin bath kala`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_Fun_0024`);
  console.log(`Input: mama ada gedhara inna kalin bath kala`);
  console.log(`Expected: මම අද ගෙදර ඉන්න කලින් බත් කලා`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Neg_Fun_0001 -  Numbers only', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Neg_Fun_0001'.startsWith('Pos_UI') || 'Neg_Fun_0001'.startsWith('Neg_UI')) {
    for (const char of `1234`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `1234`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Neg_Fun_0001`);
  console.log(`Input: 1234`);
  console.log(`Expected: No output expected`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Neg_Fun_0002 -  Special characters', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Neg_Fun_0002'.startsWith('Pos_UI') || 'Neg_Fun_0002'.startsWith('Neg_UI')) {
    for (const char of `@@@###`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `@@@###`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Neg_Fun_0002`);
  console.log(`Input: @@@###`);
  console.log(`Expected: කිසිදු පරිවර්තනයක් නොවේ`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Neg_Fun_0003 - English sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Neg_Fun_0003'.startsWith('Pos_UI') || 'Neg_Fun_0003'.startsWith('Neg_UI')) {
    for (const char of `I am going home`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `I am going home`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Neg_Fun_0003`);
  console.log(`Input: I am going home`);
  console.log(`Expected: අසම්පූර්ණ පරිවර්තනය`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Neg_Fun_0004 - Joined words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Neg_Fun_0004'.startsWith('Pos_UI') || 'Neg_Fun_0004'.startsWith('Neg_UI')) {
    for (const char of `mamagedharayanawa`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `mamagedharayanawa`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Neg_Fun_0004`);
  console.log(`Input: mamagedharayanawa`);
  console.log(`Expected: වැරදි පරිවර්තනය`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Neg_Fun_0005 - Emoji input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Neg_Fun_0005'.startsWith('Pos_UI') || 'Neg_Fun_0005'.startsWith('Neg_UI')) {
    for (const char of `😊😊`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `😊😊`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Neg_Fun_0005`);
  console.log(`Input: 😊😊`);
  console.log(`Expected: කිසිදු පරිවර්තනයක් නොවේ`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Neg_Fun_0006 - Mixed symbols', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Neg_Fun_0006'.startsWith('Pos_UI') || 'Neg_Fun_0006'.startsWith('Neg_UI')) {
    for (const char of `mam@123`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `mam@123`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Neg_Fun_0006`);
  console.log(`Input: mam@123`);
  console.log(`Expected: අසම්පූර්ණ පරිවර්තනය`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Neg_Fun_0007 - Empty input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  // For empty input, use empty string
  await page.fill(inputSelector, ``);
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Neg_Fun_0007`);
  console.log(`Input: `);
  console.log(`Expected: No output`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Neg_Fun_0008 - Random text', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Neg_Fun_0008'.startsWith('Pos_UI') || 'Neg_Fun_0008'.startsWith('Neg_UI')) {
    for (const char of `asdfgh`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `asdfgh`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Neg_Fun_0008`);
  console.log(`Input: asdfgh`);
  console.log(`Expected: වැරදි පරිවර්තනය`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Neg_Fun_0009 - Uppercase input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Neg_Fun_0009'.startsWith('Pos_UI') || 'Neg_Fun_0009'.startsWith('Neg_UI')) {
    for (const char of `MAMA`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `MAMA`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Neg_Fun_0009`);
  console.log(`Input: MAMA`);
  console.log(`Expected: වැරදි පරිවර්තනය`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Neg_Fun_0010 - Long invalid string', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Neg_Fun_0010'.startsWith('Pos_UI') || 'Neg_Fun_0010'.startsWith('Neg_UI')) {
    for (const char of `xxxxxxxxxxxxx`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `xxxxxxxxxxxxx`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Neg_Fun_0010`);
  console.log(`Input: xxxxxxxxxxxxx`);
  console.log(`Expected: Invalid long input`);
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});

test('Pos_UI_0001 - Real-time translation update', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
  const outputSelector = 'div[class="w-full h-80 p-3 rounded-lg ring-1 ring-slate-300 whitespace-pre-wrap overflow-y-auto flex-grow bg-slate-50"]';
  if ('Pos_UI_0001'.startsWith('Pos_UI') || 'Pos_UI_0001'.startsWith('Neg_UI')) {
    for (const char of `mam gedhara`) {
      await page.type(inputSelector, char);
      await page.waitForTimeout(200);
    }
  } else {
    await page.fill(inputSelector, `mam gedhara`);
  }
  await page.waitForTimeout(1000);
  const actualOutput = (await page.innerText(outputSelector)).trim();
  console.log(`Test Case: Pos_UI_0001`);
  console.log(`Input: mam gedhara`);
  console.log(`Expected: Output updats automatically`); // Note: This seems like a placeholder; update to expected Sinhala if needed
  console.log(`Actual: ${actualOutput}`);
  console.log('---');
});