import { lineColor } from "./theme";

export default `
---
config:
  theme: base
  layout: elk
  elk:
    mergeEdges: false
    nodePlacementStrategy: LINEAR_SEGMENTS
  themeVariables:
    lineColor: #FFFFFF
---
%%{
    init: {
      'theme': 'base',
      'themeVariables': {
        'primaryColor': '#BB2528',
        'primaryTextColor': '#fff',
        'primaryBorderColor': '#7C0000',
        'lineColor': '${lineColor}',
        'secondaryColor': '#006100',
        'tertiaryColor': '#fff'
      }
    }
}%%
flowchart TD
N4(Arrow) --> N5(Crossbow bolt)
N5(Crossbow bolt) --> N6(Boomerang)
N7(Seismic shockwave) --> N8(Earthquake)
N2(Anima) --> N9(Fire ball)
N9(Fire ball) --> N10(Fire blast)
N10(Fire blast) --> N11(Flamethrower)
N12(Ice shards) --> N13(Freeze beam)
N14(Icicle) --> N12(Ice shards)
N3(Spiritus) --> N14(Icicle)
N15(Ball lightning) --> N16(Megaspark)
N17(Electric bolt) --> N15(Ball lightning)
N18(Poison bubble) --> N19(Gas cloud)
N20(Bubble) --> N21(Rain)
N22(Force field) --> N23(Force wave)
N1(Corpus) --> N4(Arrow)
N21(Rain) --> N24(Acid rain)
N18(Poison bubble) --> N24(Acid rain)
N14(Icicle) --> N25(Blizzard)
N12(Ice shards) --> N25(Blizzard)
N4(Arrow) --> N26(Bomb arrow)
N27(Bomb) --> N26(Bomb arrow)
N1(Corpus) --> N27(Bomb)
N2(Anima) --> N27(Bomb)
N9(Fire ball) --> N20(Bubble)
N14(Icicle) --> N20(Bubble)
N1(Corpus) --> N7(Seismic shockwave)
N3(Spiritus) --> N7(Seismic shockwave)
N4(Arrow) --> N28(Fire arrow)
N9(Fire ball) --> N28(Fire arrow)
N9(Fire ball) --> N29(Fire barrage)
N10(Fire blast) --> N29(Fire barrage)
N9(Fire ball) --> N30(Fire column)
N3(Spiritus) --> N22(Force field)
N2(Anima) --> N22(Force field)
N12(Ice shards) --> N31(Frozen ground)
N1(Corpus) --> N31(Frozen ground)
N14(Icicle) --> N32(Ice volley)
N5(Crossbow bolt) --> N33(Javelin)
N1(Corpus) --> N33(Javelin)
N9(Fire ball) --> N17(Electric bolt)
N3(Spiritus) --> N17(Electric bolt)
N17(Electric bolt) --> N34(Static charge)
N15(Ball lightning) --> N35(Lightning strike)
N1(Corpus) --> N35(Lightning strike)
N10(Fire blast) --> N36(Meteor)
N1(Corpus) --> N36(Meteor)
N4(Arrow) --> N37(Poison dart)
N18(Poison bubble) --> N37(Poison dart)
N9(Fire ball) --> N18(Poison bubble)
N1(Corpus) --> N18(Poison bubble)
N4(Arrow) --> N38(Spear)
N2(Anima) --> N39(Inferno)
N3(Spiritus) --> N40(Ice spike)
N1(Corpus) --> N41(Cannonball)
N30(Fire column) --> N42(Firewall)
N32(Ice volley) --> N43(Ice ray)
N17(Electric bolt) --> N44(Electric shock)
N15(Ball lightning) --> N44(Electric shock)
N21(Rain) --> N45(Firestorm)
N9(Fire ball) --> N45(Firestorm)
N46(Chrysopoeia) --> N47(Chrysopoeia II)
N3(Spiritus) --> N47(Chrysopoeia II)
N2(Anima) --> N48(Health potion)
N22(Force field) --> N49(Magnetic field)
N23(Force wave) --> N49(Magnetic field)
N1(Corpus) --> N51(Attack potion)
N3(Spiritus) --> N51(Attack potion)
N2(Anima) --> N51(Attack potion)
N1(Corpus) --> N46(Chrysopoeia)
N2(Anima) --> N46(Chrysopoeia)
`;
