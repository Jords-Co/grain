import { skipToMainContent } from "$digerati/skipToMainContent";
import { currentYear } from "$digerati/currentYear";
import { autoPlayTabs } from "$grain/autoPlayTabs";

window.Webflow || [];
window.Webflow.push(() => {
  skipToMainContent();
  currentYear();
  autoPlayTabs();
});