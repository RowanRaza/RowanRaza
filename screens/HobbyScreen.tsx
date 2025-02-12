import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSection } from "./IconSection";
import { ScrollView } from "react-native";

export function HobbyScreen() : React.JSX.Element {
    return(
        <SafeAreaView>
            <ScrollView>
            <IconSection 
                title="Echecs"    
                desc="Amateur de jeu d'échecs classé encore seulement à 1000 elo sur Chess.com en fin 2024 en partie Rapide. 
                Ayant pour préférence les parties rapides et les blitz, rejoignez moi sur chess.com dans la section Comptes et contact"
                icon={require('../assets/chess.png')}
            />
            <IconSection 
                title="Jeux videos"    
                desc="J'apprécie également beaucoup les jeux videos tant sur console que sur appareil mobile car ces derniers me procurent une sensation d'évasion et d'évacuation de stress, FIFA (EA Sport FC, EA FC Mobile), Tekken, Echecs,..."
                icon={require('../assets/games.png')}
            />
            <IconSection 
                title="Sport"    
                desc="Le sport est une passion essentielle dans ma vie. Le vélo me permet d'explorer, tandis que le football m'offre des moments intenses en équipe. Ces activités me poussent à me dépasser, à rester motivé, et m'enseignent la discipline et la persévérance au quotidien."
                icon={require('../assets/sport.png')}
            />
            <IconSection 
                title="Musique"    
                desc="La musique occupe également une place essentielle dans mes passe-temps. Elle m'inspire et me calme quand j'en ai le plus besoin."
                icon={require('../assets/music.png')}
            />
            </ScrollView>
        </SafeAreaView>
    )
}