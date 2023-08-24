import * as React from "react";

export enum DrawerAnchorEnum {
  Left = "left",
  Right = "right",
  Bottom = "bottom",
}

interface UserData {
  FirstName: string;
  FullName: string;
  Email: string;
  PhoneNumber: string;
}
interface IContext {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  drawerComp: string;
  setDrawerComp: React.Dispatch<React.SetStateAction<string>>;
  drawerAnchor: DrawerAnchorEnum;
  setdrawerAnchor: React.Dispatch<React.SetStateAction<DrawerAnchorEnum>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  backdropOpen: boolean;
  setBackdropOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dailogueopen: boolean;
  setDailogueopen: React.Dispatch<React.SetStateAction<boolean>>;
  dialoguecomp: React.ReactNode | null;
  setDialoguecomp: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
}

const AuthContext = React.createContext<IContext>({
  openDrawer: false,
  setOpenDrawer: () => {},
  drawerComp: "",
  setDrawerComp: () => {},
  drawerAnchor: DrawerAnchorEnum.Left,
  setdrawerAnchor: () => {},
  theme: "light",
  setTheme: () => {},
  userData: {
    FirstName: "",
    FullName: "",
    Email: "",
    PhoneNumber: "",
  },
  setUserData: () => {},
  backdropOpen: false,
  setBackdropOpen: () => {},
  dailogueopen: false,
  setDailogueopen: () => {},
  dialoguecomp: null,
  setDialoguecomp: () => {},
});

const Store: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [drawerComp, setDrawerComp] = React.useState("");
  const [drawerAnchor, setdrawerAnchor] = React.useState(DrawerAnchorEnum.Left);
  const [theme, setTheme] = React.useState("light");
  const [userData, setUserData] = React.useState({
    FirstName: "",
    FullName: "",
    Email: "",
    PhoneNumber: "",
  });
  const [backdropOpen, setBackdropOpen] = React.useState(false);
  const [dailogueopen, setDailogueopen] = React.useState(false);
  const [dialoguecomp, setDialoguecomp] =
    React.useState<React.ReactNode | null>(null);

  return (
    <AuthContext.Provider
      value={{
        openDrawer,
        setOpenDrawer,
        drawerComp,
        setDrawerComp,
        drawerAnchor,
        setdrawerAnchor,
        theme,
        setTheme,
        userData,
        setUserData,
        backdropOpen,
        setBackdropOpen,
        dailogueopen,
        setDailogueopen,
        dialoguecomp,
        setDialoguecomp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { Store, AuthContext };
