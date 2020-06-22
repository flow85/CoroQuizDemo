import React from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { changeToView, VIEWS } from '../state';


const mapStateToProps = (state) => {
    return { 
        numberOfTasks: state.numberOfTasks,
        score: state.score,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        changeToView: (view) => dispatch(changeToView(view))
    };
}

class BackgroundInformation extends React.Component {
    render() {
        return (
            <Box>
				<b>Frage 1:</b> <br/>
                Du möchtest unbedingt deine beste Freundin Sarah mal wieder treffen. Ist das erlaubt? <br/>
				<br/>
				richtige Antwort:  <br/>
                Ja, aber wir müssen 1,5 m Abstand halten.  <br/>
				<br/>
				Begründung:  <br/>
                Seit dem 2. Juni dürfen sich zwei Haushalte oder bis zu fünf Personen aus unterschiedlichen Haushalten gemeinsam im öffentlichen Raum aufhalten, müssen allerdings den Mindestabstand von 1,5 Meter wahren.  <br/>
				<br/>
				Link zur Quelle:  <br/>
				<a href="url">https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html</a>  <br/>
				<br/>
				<br/>
				<b>Frage 2:</b> <br/> 
				Du möchtest Freitagabend endlich mal wieder in der Bar abhängen. Geht das? <br/>
				<br/>
				richtige Antwort:  <br/>
				Leider nicht. <br/>
				<br/>
				Begründung:  <br/>
				Gaststätten und Cafés dürfen seit dem 15. Mai zwar wieder öffnen, Bars bleiben jedoch weiterhin geschlossen. <br/>
				<br/>
				Link zur Quelle:  <br/>
				<a href="url">https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html</a>  <br/><br/>
				<br/>
				<br/>
				<b>Frage 3:</b>  <br/>
				Was muss in Berlin geschlossen bleiben? <br/>
				<br/>
				richtige Antwort:  <br/>
				Clubs und Diskotheken  <br/>
				<br/>
				Begründung:  <br/>
				Friseurbetriebe, Kosmetik- und Tattoostudios sowie Massagepraxen sind wieder offen. Seit dem 2. Juni dürfen auch Kneipen und Shisha-Bars wieder bewirten. Dabei müssen Gäste und Bedienung aber Abstands- und Hygieneregeln einhalten.  <br/>
				<br/>
				Link zur Quelle:  <br/>
				<a href="url">https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html</a>  <br/><br/>
				<br/>
				<br/>
				<b>Frage 4:</b>  <br/>
				Wie viele Personen dürfen sich seit dem 10. Juni treffen? <br/>
				<br/>
				richtige Antwort:  <br/>
				Im öffentlichen Raum darf man sich mit bis zu zehn Personen aus verschiedenen Haushalten oder in einer Gruppe mit Angehörigen von maximal zwei Haushalten treffen. Im privaten Raum dürfen sich maximal 20 Personen aus verschiedenen Haushalten treffen.  <br/>
				<br/>
				Begründung:  <br/>
				Für Familienangehörige gilt die Beschränkung zu Hause nicht. Sobald eine nicht verwandte Person hinzukommt, greift wiederum die Beschränkung auf 20 Personen maximal. In mietbaren Lokalitäten dürfen sich bis zu 99 Personen treffen. Im öffentlichen Raum ist bis zum Ablauf des 30. Juni 2020 ein Aufenthalt nur alleine oder in einer Gruppe mit Angehörigen von bis zu zwei Haushalten oder mit bis zu zehn Personen gestattet. Zu anderen Personen ist ein Mindestabstand von eineinhalb Metern einzuhalten.  <br/>
				<br/>
				Link zur Quelle:  <br/>
				<a href="url">https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html</a>  <br/><br/>
				<br/>
				<br/>
				<b>Frage 5:</b> <br/>
				Dürfen sich Verwandte in unbegrenzter Zahl zu Hause treffen? <br/>
				<br/>
				richtige Antwort:  <br/>
				Ja, alle Verwandte sowie die Angehörigen des gleichen Haushalts und auch deren Partner dürfen sich in unbegrenzter Zahl zu Hause treffen.  <br/>
				<br/>
				Begründung:  <br/>
				Verwandte (Großeltern, Eltern, Kinder, Enkelkinder, Geschwister und deren Nachkommen) sowie die Angehörigen des gleichen Haushalts und auch deren Partner dürfen sich in unbegrenzter Zahl zu Hause treffen. <br/>
				<br/>
				Link zur Quelle:  <br/>
				<a href="url">https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html</a>  <br/><br/>
				<br/>
				<br/>
				<b>Frage 6:</b> <br/>
				Muss der Mindestabstand von eineinhalb Metern auch zu Hause gewahrt werden? <br/>
				<br/>
				richtige Antwort:  <br/>
				Die Abstandsvorgaben gelten im privaten Raum nicht. Allerdings wird empfohlen, auch im Privaten so gut es geht Abstand zu halten, insbesondere zu Personen, die zur Risikogruppe gehören.  <br/>
				<br/>
				Begründung:  <br/>
				Auch wenn die Abstandsvorgaben im privaten Raum nicht gelten ist es hier wichtig jegliche Übertragungsmöglichkeiten zu reduzieren, um die Gefahr einer Ansteckung zu reduzieren.  <br/>
				<br/>
				Link zur Quelle:  <br/>
				<a href="url">https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html</a>  <br/><br/>
				<br/>
				<br/>
				<b>Frage 7:</b> <br/>
				Gelten die Kontaktbeschränkungen im öffentlichen Raum auch für Autofahrten? <br/>
				<br/>
				richtige Antwort:  <br/>
				Ja, da Fahrten mit dem privaten Auto grundsätzlich im öffentlichen Raum erfolgen. <br/>
				<br/>
				Begründung:  <br/>
				Die Antwort lautet ja, da Fahrten mit dem privaten Auto grundsätzlich im öffentlichen Raum erfolgen. Allerdings dürften theoretisch zehn Personen (maximal) in einem Auto fahren. Alle Personen im Auto sollten allerdings eine Maske tragen, da sie lange auf engen Raum zusammen sind und so ein besonderes Infektionsrisiko besteht.  <br/>
				<br/>
				Link zur Quelle:  <br/>
				<a href="url">https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html</a>  <br/><br/>
				<br/>
				<br/>
				<b>Frage 8:</b> <br/>
				Gilt die Maskenpflicht auch in Bankfilialen? <br/>
				<br/>
				richtige Antwort:  <br/>
				Nein, grundsätzlich muss man in reinen Bankfilialen ohne Verkauf von Produkten keine Maske tragen, darf aber eine tragen. <br/>
				<br/>
				Begründung:  <br/>
				In Banken oder Postfilialen gilt die Maskenpflicht nur, wenn dort im Sinne eines Ladengeschäftes auch Produkte verkauft werden - regelmäßig etwa in Postfilialen. Unabhängig davon ist es grundsätzlich sinnvoll, eine Maske zu tragen, wo immer der Mindestabstand von eineinhalb Metern nicht eingehalten werden kann.  <br/>
				<br/>
				Link zur Quelle:  <br/>
				<a href="url">https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html</a>  <br/><br/>
				<br/>
				<br/>
				<b>Frage 9:</b> <br/>
				Mt wem darf ich im Restaurant essen gehen? <br/>
				<br/>
				richtige Antwort:  <br/>
				Speisegaststätten gelten als öffentlicher Raum. Am Tisch sitzen darf man demnach mit maximal zehn Personen. Mehr dürfen es dann sein, wenn sich zwei Haushalte treffen, die insgesamt mehr als zehn Personen umfassen. Zu allen weiteren Personen muss der Mindestabstand von eineinhalb Metern eingehalten werden. <br/>
				<br/>
				Begründung:  <br/>
				In mietbaren Lokalitäten können bis zu 99 Personen zusammenkommen. <br/>
				<br/>
				Link zur Quelle:  <br/>
				<a href="url">https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html</a>  <br/><br/>
				<br/>
				<br/>
				<b>Frage 10:</b> <br/>
				Muss man in einer Arztpraxis eine Maske tragen? <br/>
				<br/>
				richtige Antwort:  <br/>
				Ja, Patienten sowie deren Begleitpersonen ab dem vollendeten sechsten Lebensjahr müssen in sämtlichen Praxen, auch humanmedizinischer Heilberufe wie bei Physiotherapeuten oder Ergotherapeuten eine nicht-medizinische Alltagsmaske oder eine vergleichbare Mund-Nasen-Bedeckung tragen, wenn dies nicht aus medizinischen oder aus sonstigen zwingenden Gründen unzumutbar ist.  <br/>
				<br/>
				Begründung:  <br/>
				Es gibt keine generelle Maskenpflicht in Arztpraxen. Allerdings müssen Patienten ab einem Alter von sechs Jahren eine Mund- und Nasenbedeckung beim Zahnarzt oder Physiotherapeuten tragen, wenn dies nicht aus medizinischen oder aus sonstigen zwingenden Gründen unzumutbar ist.  <br/>
				<br/>
				Link zur Quelle:  <br/>
				<a href="url">https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html</a>  <br/><br/>
				<br/>
				<br/>
				<b>Frage 11:</b> <br/>
				Gelten die Abstandsregeln auch im Schwimmbad? <br/>
				<br/>
				richtige Antwort:  <br/>
				Nein, aber die Anzahl der Personen im Wasser ist begrenzt. Pro Person sind in Schwimmerbecken zehn Quadratmeter, in Nichtschwimmerbecken vier Quadratmeter vorgesehen. Ausnahmen gelten beispielsweise für Eltern und ihre Kinder.  <br/>
				<br/>
				Begründung:  <br/>
				Abweichend hiervon kann die Wasserfläche auch in einzelne Bahnen unterteilt werden, möglichst mit Leinen oder anderen geeigneten Markierungen. Auf einer 50-Meter-Bahn dürfen etwa nur maximal zehn Personen gleichzeitig schwimmen - und pro Bahn immer nur in eine Richtung. Für Liegewiesen und Liegeflächen errechnet sich die maximale Anzahl an Personen, die sich gleichzeitig auf diesen niederlassen dürfen, aus der Gesamtfläche und einer Liegefläche von zehn Quadratmetern pro Person.  <br/>
				<br/>
				Link zur Quelle:  <br/>
				<a href="url">https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html</a>  <br/><br/>
				<br/>
				<br/>
				<b>Frage 12:</b> <br/>
				Welche aus dem Ausland einreisenden Personen müssen sich in eine 14-tägige häusliche Quarantäne begeben? <br/>
				<br/>
				richtige Antwort:  <br/>
				Personen, die aus Staaten einreisen, die eine Neuinfiziertenzahl im Verhältnis zur Bevölkerung von mehr als 50 Fällen pro 100.000 Einwohner kumulativ in den letzten sieben Tagen aufweisen.  <br/>
				<br/>
				Begründung:  <br/>
				Personen aus Staaten mit einer Neuinfiziertenzahl im Verhältnis zur Bevölkerung von mehr als 50 Fällen pro 100.000 Einwohner kumulativ in den letzten sieben Tagen sind dazu verpflichtet sich unverzüglich nach der Einreise auf direktem Weg in die eigene Häuslichkeit oder eine andere geeignete Unterkunft zu begeben und sich für einen Zeitraum von 14 Tagen nach ihrer Einreise ständig dort abzusondern.  <br/>
				<br/>
				Link zur Quelle:  <br/>
				<a href="url">https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html</a>  <br/><br/>
				<br/>
				<br/>
				<b>Frage 13:</b> <br/>
				Welche Regeln gelten beim Kontaktsport? <br/>
				<br/>
				richtige Antwort:  <br/>
				Die Ausübung von Kontakt-Mannschaftssportarten ist grundsätzlich verboten. Sportarten, die zwingend nahen Kontakt erfordern, dürfen weiterhin nicht ausgeübt werden. Dazu gehören allen voran Mannschaftssportarten wie Fußball, Handball oder Basketball. Training mit hochintensiver Ausdauerbelastung darf derzeit nur im Freien stattfinden.  <br/>
				<br/>
				Begründung:  <br/>
				Prinzipiell dürfen seit dem 2. Juni alle öffentlichen und privaten Sportanlagen und Sportstätten wieder öffnen – egal ob drinnen oder draußen. Während des gesamten Trainings und bei allen Übungen muss allerdings ein Abstand von mindestens eineinhalb Metern zu allen anderen Sportlerinnen und Sportlern eingehalten werden. Mehr Nähe darf auch beim Sport nur dann sein, wenn die Personen in gerader Linie verwandt sind, wenn es sich um Geschwister oder deren Nachkommen handelt oder die Personen ohnehin in einem gemeinsamen Haushalt zusammenleben. Für alle anderen Personen ist direkter körperlicher Kontakt untersagt. Seit dem 11. Juni dürfen in Baden-Württemberg Wettbewerbe und Wettkämpfe im Breiten- und Leistungssport ohne Zuschauerinnen und Zuschauer wieder ausgetragen werden.  <br/>
				<br/>
				Link zur Quelle:  <br/>
				<a href="url">https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html</a>  <br/><br/>
				<br/>
				<br/>
				<b>Frage 14:</b> <br/>
				Welchen Mindestabstand sollten Jogger und Radfahrer zu anderen Passanten einhalten? <br/>
				<br/>
				richtige Antwort:  <br/>
				Beim Joggen und Radfahren sollte zu anderen Personen ein Abstand von zehn bis zwanzig Metern eingehalten werden.  <br/>
				<br/>
				Begründung:  <br/>
				Beim Joggen und Radfahren sollte zu anderen Personen ein Abstand von zehn bis zwanzig Metern eingehalten werden, um während einer körperlichen Betätigung die Ansteckungsgefahr deutlich zu reduzieren.  <br/>
				<br/>
				Link zur Quelle:  <br/>
				<a href="url">https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html</a>  <br/><br/>
				<br/>
				<br/>
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => {this.props.changeToView(VIEWS.MENU)}}>
                    Zurück zum Menu
                </Button>
            </Box>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundInformation);