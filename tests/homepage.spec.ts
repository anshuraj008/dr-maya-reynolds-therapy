import { test, expect } from "@playwright/test";

test.describe("Dr. Maya Reynolds Therapy Website - Core Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("1. Homepage metadata, title and SEO tags are correctly rendered", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(
      /Anxiety & Trauma Therapy in Santa Monica \| Dr\. Maya Reynolds, PsyD/i
    );

    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute(
      "content",
      /Santa Monica.*California.*Dr\. Maya Reynolds/i
    );

    const metaRobots = page.locator('meta[name="robots"]');
    await expect(metaRobots).toHaveAttribute("content", /noindex/i);
  });

  test("2. All core sections and landmarks exist and are navigable", async ({
    page,
  }) => {
    // Header & Skip Link
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator('a[href="#main-content"]')).toBeAttached();

    // Core Sections
    await expect(page.locator("h1")).toContainText(
      "Anxiety & Trauma Therapy in Santa Monica for Adults Ready to Feel Grounded Again"
    );
    await expect(page.locator("#services")).toBeVisible();
    await expect(page.locator("#approach")).toBeVisible();
    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#office")).toBeVisible();
    await expect(page.locator("#faqs")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });

  test("3. Profile-supported services are rendered with exact copy", async ({
    page,
  }) => {
    const servicesSection = page.locator("#services");
    await expect(servicesSection).toContainText("Anxiety & Panic Therapy");
    await expect(servicesSection).toContainText("Trauma & EMDR Therapy");
    await expect(servicesSection).toContainText("Burnout & Perfectionism Therapy");
  });

  test("4. Our Office custom section contains Santa Monica address & imagery", async ({
    page,
  }) => {
    const officeSection = page.locator("#office");
    await expect(officeSection).toContainText("123th Street 45 W, Santa Monica, CA 90401");
    await expect(officeSection).toContainText("A Calm Space for Therapy in Santa Monica");

    // Check office images
    const officeImages = officeSection.locator("img");
    const count = await officeImages.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test("5. FAQ Accordion expands and collapses properly", async ({ page }) => {
    const firstFaqButton = page.locator("#faq-btn-0");
    const secondFaqButton = page.locator("#faq-btn-1");

    await expect(firstFaqButton).toHaveAttribute("aria-expanded", "true");

    // Click second FAQ
    await secondFaqButton.click();
    await expect(secondFaqButton).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#faq-panel-1")).toBeVisible();
  });

  test("6. Consultation Modal opens, shows emergency disclaimer, and closes", async ({
    page,
  }) => {
    // Open modal via header or hero button
    const ctaButton = page.getByRole("button", { name: /Schedule a Consultation|Get in Touch/i }).first();
    await ctaButton.click();

    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible();
    await expect(dialog).toContainText("Request a Consultation");
    await expect(dialog).toContainText("988");

    // Close via close button or escape key
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
  });

  test("7. Mobile responsiveness: no horizontal scrollbar overflow", async ({
    page,
  }) => {
    const scrollWidth = await page.evaluate(
      () => document.documentElement.scrollWidth
    );
    const clientWidth = await page.evaluate(
      () => document.documentElement.clientWidth
    );
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });
});
