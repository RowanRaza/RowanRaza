import React from "react";

export type SectionProps = {
    title: string,
    desc: string,
    onPress?: () => void
}

export type IconSectionProps = SectionProps & {
    icon: any
}

export type RootStackParamList = {
    Accueil: undefined;
    Biographie: undefined;
    'Passe-temps': undefined;
    Contacts: undefined;
    'Coming soon': undefined
};
