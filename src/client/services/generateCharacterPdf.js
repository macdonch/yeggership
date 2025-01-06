import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import Logo from '../../assets/logo_512_grey_transparent.png';

const GenerateCharacterPdf = (characterSummary) => {

  let MyDocument;

  Font.register(
    {
      family: 'Montserrat',
      fonts: [
      {
        src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-.ttf'
      },
      {
        src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM70w-.ttf'
      }
      ]
    }
  )

  // Letter = 612 × 792 points
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
      margin: 30,
      fontFamily: 'Montserrat',
      color: '#2c2e30',
    },
    row: {
      flexDirection: 'row',
      fontSize: 11
    },
      headerRow: {
      flexDirection: 'row'
    },
    boxBorder: {
      margin: 5,
      padding: 5,
      minWidth: 50,
      maxWidth: 552,
      border: 2,
    },
    statsBorder: {
      marginLeft: 0,
      marginRight: 20,
      marginVertical: 2,
      border: 2,
      width: 126,
      borderColor: '#2c2e30'
    },
    talentBorder: {
      marginLeft: 0,
      marginRight: 20,
      marginVertical: 10,
      border: 2,
      width: 266,
      borderColor: '#2c2e30'
    },
    statsHeadingColumn: {
      flexDirection: 'column',
      marginTop: -1,
      marginBottom: 2,
      marginLeft: -1,
      fontSize: 13,
      backgroundColor: '#2c2e30',
      color: '#ffffff',
      fontWeight: 700,
      width: 125
    },
    talentHeadingColumn: {
      flexDirection: 'column',
      marginTop: -1,
      marginBottom: 2,
      marginLeft: -1,
      fontSize: 13,
      backgroundColor: '#2c2e30',
      color: '#ffffff',
      fontWeight: 700,
      width: 265
    },
    skillsHeading: {
      marginTop: 10,
      marginBottom: 5,
      fontSize: 13,
      backgroundColor: '#2c2e30',
      color: '#ffffff',
      fontWeight: 700,
      width: 552
    },
    tableHeadingRow: {
      flexDirection: 'row',
      marginVertical: -5,
      fontSize: 11,
      fontWeight: 400,
      width: 552
    },
    tableColumn: {
      flexDirection: 'column',
      fontSize: 11,
      fontWeight: 'normal'
    },
    tableRow: {
      flexDirection: 'row',
      marginVertical: -10,
      fontSize: 11,
      alignItems: 'center'
    },
    skillRow: {
      flexDirection: 'row',
      marginVertical: -10,
      fontSize: 11
    },
    equipmentRow: {
      flexDirection: 'row',
      marginVertical: -10,
      fontSize: 11,
      alignItems: 'top'
    },
    section: {
      margin: 5,
      padding: 5,
      flexGrow: 1,
    },
    name: {
      marginTop: 10,
      marginBottom: 5,
      padding: 10,
      fontSize: 13,
      borderBottom: 2,
      borderColor: '#2c2e30',
      width: 360,
      color: '#2c2e30'
    },
    class: {
      marginTop: 10,
      marginBottom: 5,
      padding: 10,
      fontSize: 13,
      fontWeight: 700,
      borderBottom: 2,
      borderBottomColor: '#2c2e30',
      width: 132,
      backgroundColor: '#2c2e30',
      color: '#ffffff',
      textAlign: 'center'
    },
    logo: {
      margin: 0,
      padding: 0,
      width: 60,
    },
    statName: {
      margin: 5,
      padding: 5,
      width: 80,
    },
    statValue: {
      margin: 5,
      padding: 5,
      textAlign: 'right',
      fontSize: 16,
      width: 30
    },
    creditsValue: {
      margin: 5,
      padding: 5,
      width: 80,
    },
    healthName: {
      margin: 5,
      padding: 5,
      width: 60,
    },
    healthValue: {
      marginVertical: 10,
      padding: 0,
      textAlign: 'right',
      width: 10
    },
    healthFiller: {
      margin: 5,
      padding: 5,
      width: 14,
    },
    skillName: {
      margin: 5,
      padding: 5,
      width: 100
    },
    skillBonus: {
      margin: 5,
      padding: 5,
      width: 40,
      textAlign: 'center'
    },
    skillType: {
      margin: 5,
      padding: 5,
      width: 60,
      textAlign: 'center'
    },
    skillDescription: {
      margin: 5,
      padding: 5,
      flexGrow: 1,
      maxWidth: 307
    },
    loadout: {
      margin: 5,
      padding: 5,
      width: 345
    },
    trinket: {
      marginTop: 10,
      marginHorizontal: 0,
      marginBottom: 0,
      width: 180
    },
    talent: {
      margin: 5,
      padding: 5,
      flexGrow: 1,
      minWidth: 250,
      maxWidth: 260
    },
    version: {
      margin: 0,
      width: 552,
      fontSize: 8,
      textAlign: 'right',
    },
    resolve: {
      marginTop: 100,
      marginLeft: 0,
      textAlign: 'left',
      alignContent: 'baseline'
    }
  });

  // Create Document Component
  if (!("class" in characterSummary)) {
    MyDocument = (<Document />);
  } else {
    MyDocument = (
      <Document>
        <Page size="LETTER" pageMode="fullScreen" style={styles.page}>
          <View style={styles.headerRow}>
            <View style={styles.logo}>
              <Image src={Logo} style={{width: 50}}/>
            </View>
            <View style={styles.name}>
              <Text>{characterSummary.name}</Text>
            </View>
            <View style={styles.class}>
              <Text>{(characterSummary.class).toUpperCase()}</Text>
            </View>
          </View>

          {/* version */}
          <View style={styles.row}>
            <View style={styles.version}>
              <Text>{characterSummary.rules}</Text>
            </View>      
          </View>

          {/* STATS AND SAVES AND CREDITS*/}
          <View style={styles.row}>
            <View style={styles.statsBorder}>
              <View style={styles.statsHeadingColumn}>
                <View style={styles.statName}>
                  <Text>STATS</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.statName}>
                  <Text>STRENGTH</Text>
                </View>
                <View style={styles.statValue}>
                  <Text>{characterSummary.stats.strength}</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.statName}>
                  <Text>SPEED</Text>
                </View>
                <View style={styles.statValue}>
                  <Text>{characterSummary.stats.speed}</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.statName}>
                  <Text>INTELLECT</Text>
                </View>
                <View style={styles.statValue}>
                  <Text>{characterSummary.stats.intellect}</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.statName}>
                  <Text>COMBAT</Text>
                </View>
                <View style={styles.statValue}>
                  <Text>{characterSummary.stats.combat}</Text>
                </View>
              </View>
            </View>
            <View style={styles.statsBorder}>
              <View style={styles.statsHeadingColumn}>
                <View style={styles.statName}>
                  <Text>SAVES</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.statName}>
                  <Text>SANITY</Text>
                </View>
                <View style={styles.statValue}>
                  <Text>{characterSummary.saves.sanity}</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.statName}>
                  <Text>FEAR</Text>
                </View>
                <View style={styles.statValue}>
                  <Text>{characterSummary.saves.fear}</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.statName}>
                  <Text>BODY</Text>
                </View>
                <View style={styles.statValue}>
                  <Text>{characterSummary.saves.body}</Text>
                </View>
              </View>
            </View>
            <View style={styles.statsBorder}>
              <View style={styles.statsHeadingColumn}>
                <View style={styles.statName}>
                  <Text>CREDITS</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.creditsValue}>
                  <Text>{characterSummary.credits}</Text>
                </View>
              </View>
            </View>
            {/* RESOLVE */}
            {characterSummary.resolve === true && (
            <View style={styles.row}>
              <View style={styles.resolve}>
                <Text>RESOLVE</Text>
              </View>      
            </View>
            )}
          </View>

          {/* SKILLS */}
          <View style={styles.skillsHeading}>
            <View style={styles.skillName}>
              <Text>SKILLS</Text>
            </View>
          </View>

          <View style={styles.tableHeadingRow}>
            <View style={styles.skillName}>
              <Text>Skill Name</Text>
            </View>
            <View style={styles.skillBonus}>
              <Text>Bonus</Text>
            </View>
            <View style={styles.skillType}>
              <Text>Type</Text>
            </View>
            <View style={styles.skillDescription}>
              <Text>Description</Text>
            </View>
          </View>

          {characterSummary.skills.map(({displayText, description, skillType, bonus}, index) => (
            <View key={'skill' + index} style={styles.skillRow}>
              <View style={styles.skillName}>
                <Text>{displayText}</Text>
              </View>
              <View style={styles.skillBonus}>
                <Text>{bonus}</Text>
              </View>
              <View style={styles.skillType}>
                <Text>{skillType}</Text>
              </View>
              <View style={styles.skillDescription}>
                <Text>{description}</Text>
              </View>
            </View>
          ))}

          {/* TALENTS */}

          {null !== characterSummary.talent && (
            <View style={styles.row}>
              <View style={styles.talentBorder}>
                <View style={styles.talentHeadingColumn}>
                  <View style={styles.talent}>
                    <Text>Talent</Text>
                  </View>
                  </View>
                  <View style={styles.tableHeadingRow}>
                  <View style={styles.talent}>
                    <Text>{characterSummary.talent.name}</Text>
                  </View>
                  </View>
                  <View style={styles.tableRow}>
                  <View style={styles.talent}>
                    <Text>{characterSummary.talent.description}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                <View style={styles.talent}>
                  <Text> </Text>
                </View>
                </View>
              </View>
              <View style={styles.talentBorder}>
                <View style={styles.talentHeadingColumn}>
                  <View style={styles.talent}>
                    <Text>Trauma Response</Text>
                  </View>
                  </View>
                  <View style={styles.tableHeadingRow}>
                  <View style={styles.talent}>
                    <Text>{characterSummary.traumaResponse}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.talent}>
                    <Text> </Text>
                  </View>
                </View>
              </View>
            </View>
          )}

          {null === characterSummary.talent && (
            <View style={styles.row}>
              <View style={styles.talentBorder}>
                <View style={styles.talentHeadingColumn}>
                  <View style={styles.talent}>
                    <Text>Trauma Response</Text>
                  </View>
                </View>
                <View style={styles.tableHeadingRow}>
                  <View style={styles.talent}>
                    <Text>{characterSummary.traumaResponse}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.talent}>
                    <Text> </Text>
                  </View>
                </View>
              </View>
            </View>
          )}

          {/* HEALTH */}
          <View style={styles.row}>
            <View style={styles.talentBorder}>
              <View style={styles.talentHeadingColumn}>
                <View style={styles.talent}>
                <Text>HEALTH</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.healthName}>
                <Text>WOUNDS</Text>
                </View>
                <View style={styles.healthValue}>
                <Text>{characterSummary.health.wounds}</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.healthName}>
                <Text>HEALTH</Text>
                </View>
                <View style={styles.healthValue}>
                <Text>{characterSummary.health.health}</Text>
                </View>
              </View>
            </View>
            <View style={styles.talentBorder}>
              <View style={styles.talentHeadingColumn}>
                <View style={styles.talent}>
                <Text>STRESS</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.statName}>
                <Text>MINIMUM</Text>
                </View>
                <View style={styles.healthValue}>
                <Text>2</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.statName}>
                <Text>CURRENT</Text>
                </View>
              </View>
            </View>
          </View>

          {/* EQUIPMENT */}
          <View style={styles.skillsHeading}>
            <View style={styles.skillName}>
              <Text>EQUIPMENT</Text>
            </View>
          </View>

          <View style={styles.equipmentRow}>
            <View style={styles.loadout}>
            {characterSummary.loadout.map((item, index) => (
              <Text key={'equip' + index}>{item}</Text>
            ))}
            </View>
            <View>
              <View style={styles.trinket}>
                <Text>TRINKET</Text>
                <Text>{characterSummary.trinket}</Text>
              </View>
              <View style={styles.trinket}>
                <Text>PATCH</Text>
                <Text>{characterSummary.patch}</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );
  }
  return (MyDocument)
}

export default GenerateCharacterPdf;