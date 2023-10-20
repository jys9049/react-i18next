import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const handleLangChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const count = 5;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <div>
        <button onClick={() => handleLangChange("ko")}>KO</button>
        <button onClick={() => handleLangChange("en")}>EN</button>
      </div>
      <div>
        <h1>{t("테스트")}</h1>
        <h1>{t("{{count}} 마리", { count: count })}</h1>
      </div>
    </div>
  );
}

export default App;
