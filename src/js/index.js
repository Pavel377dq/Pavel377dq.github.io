import '../styles/normalize.scss';
import "../styles/html.scss";
import "../styles/fonts.scss";
import "../styles/a.scss";
import "../styles/body.scss";
import "../styles/body-aside.scss";
import "../styles/button.scss";
import "../styles/clean-list.scss";
import "../styles/color.scss";
import "../styles/commercial-offer.scss";
import "../styles/contacts.scss";
import "../styles/data.scss";
import "../styles/divider-two.scss";
import "../styles/divider-one.scss";
import "../styles/expand.scss";
import "../styles/feedback.scss";
import "../styles/form.scss";
import "../styles/header.scss";
import "../styles/header-inner.scss";
import "../styles/header-wrap.scss";
import "../styles/languages.scss";
import "../styles/link.scss";
import "../styles/list.scss";
import "../styles/list-buttons.scss";
import "../styles/list-reset.scss";
import "../styles/live-icon.scss";
import "../styles/logo.scss";
import "../styles/mailAndNumber.scss";
import "../styles/main-information.scss";
import "../styles/major-footer.scss";
import "../styles/menu.scss";
import "../styles/modals.scss";
import "../styles/navigation.scss";
import "../styles/new-search.scss";
import "../styles/next.scss";
import "../styles/option_text.scss";
import "../styles/order.scss";
import "../styles/order-services.scss";
import "../styles/page-service.scss";
import "../styles/pop-up-menu.scss";
import "../styles/products-repair.scss";
import "../styles/repair-elements.scss";
import "../styles/request-call.scss";
import "../styles/request-message.scss";
import "../styles/send.scss";
import "../styles/swiper.scss";
import "../styles/technique-elements.scss";
import "../styles/top-menu.scss";
import "../styles/wrap.scss";
import "../styles/active-item.scss";
import Listeners from "./allListeners/eventListeners.js";
import ListenersPopUp from "./allListeners/ListenersPopUp.js";
import ListenersCallMessage from "./allListeners/ListenersCallMessage.js";
import ListenerMainText from "./allListeners/ListenerMainText.js";



Listeners(
  ".repair-elements__button-wrapper .expand",
  ".repair-elements__button-wrapper .expand__text",
  ".repair-elements__button-wrapper .expand__icon",
  ".repair-elements__list",
  "repair-elements__list--visible",
  "repair-elements__expand--margin-top-small",
  "repair-elements__expand--margin-top-big",
  "article.products-repair",
  "products-repair--top-margin"
);

Listeners(
  ".technique-elements__button-wrapper .expand",
  ".technique-elements__button-wrapper .expand__text",
  ".technique-elements__button-wrapper .expand__icon",
  ".technique-elements__list",
  "technique-elements__list--visible",
  "technique-elements__expand--margin-top-small",
  "technique-elements__expand--margin-top-big",
  "section.products-repair",
  "products-repair--top-margin"
);

ListenersPopUp();

ListenersCallMessage(
  ".button__phone",
  ".request-call__button",
  ".modals__call .clean-list__button",
  ".modals__call",
  "modals__call--visible",".request-call"
);

ListenersCallMessage(
  ".button__message",
  ".request-message__button",
  ".modals__message .clean-list__button",
  ".modals__message",
  "modals__message--visible",".request-message"
);

ListenerMainText();
