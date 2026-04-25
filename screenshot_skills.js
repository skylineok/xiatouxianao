const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto('http://localhost:8080');
    
    // 滚动到技能中心区域
    const skillsSection = await page.$('#skills');
    if (skillsSection) {
        await skillsSection.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        await skillsSection.screenshot({ path: 'skills_area.png' });
    }
    
    await browser.close();
})();
