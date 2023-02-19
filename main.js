import {getiPhoneSheetValues, getSamsungSheetValues, getiPadSheetValues, 
    getSamsungTabletSheetValues, getUncommonModelSheetValues, getAccessoriesSheetValues} from "./gsheetreader.js";

window.onload = function() {
    //更新时间的注释
    console.log('updated 19/02/2023')
    
    //店内产品
    var case1={name:"Soft jelly case",price:"15",image:"images/case1.png"};
    var case2={name:"Mercury soft",price:"20",image:"images/case2.png"};
    var case3={name:"Mercury SF(soft feeling)",price:"25",image:"images/case3.png"};
    //var case4={name:"Soft premium",price:"20",image:"images/case4.png"};
    //var case5={name:"Soft premium+",price:"25",image:"images/case5.png"};
    var case6={name:"Stand armor case",price:"25",image:"images/case6.png"};
    var case7={name:"Armor case 钢甲",price:"25",image:"images/case7.png"};
    var case8={name:"Armor case 拉丝",price:"25",image:"images/case8.png"};
    //var case9={name:"Armor case 大黄蜂",price:"25",image:"images/case9.png"};
    var case10={name:"Ring armor case",price:"25",image:"images/case10.png"};
    //var case11={name:"Bumper armor case",price:"25",image:"images/case11.png"};
    var case12={name:"One piece armor case",price:"25",image:"images/case12.png"};
    var case14={name:"Tech case 菱格",price:"25",image:"images/case14.png"};
    var case15={name:"Tech pattern case",price:"25",image:"images/case15.png"};
    var case16={name:"Liquid silicon case",price:"25",image:"images/case16.png"};
    var case17={name:"Diamond case",price:"30",image:"images/case17.png"};
    var case18={name:"Card case 圆角",price:"30",image:"images/case18.png"};
    var case19={name:"Fancy diary",price:"25",image:"images/case19.png"};
    var case20={name:"Pattern wallet",price:"30",image:"images/case20.png"};
    var case21={name:"Hanman diary(clip/no clip/slim)",price:"30",image:"images/case21.png"};
    var case23={name:"Rich diary",price:"40",image:"images/case23.png"};
    var case24={name:"IPAD Soft jelly back",price:"20",image:"images/case24.png"};
    var case25={name:"Soft jelly back with pen slot",price:"25",image:"images/case25.png"};
    var case26={name:"Rotation case",price:"30",image:"images/case26.png"};
    var case27={name:"Triple fold flip(hard/soft)",price:"35",image:"images/case27.png"};
    var case28={name:"IPAD Fancy diary",price:"35",image:"images/case28.png"};
    var case29={name:"Pattern flip case",price:"35",image:"images/case29.png"};
    var case30={name:"IPAD Heavy duty case",price:"45",image:"images/case30.png"};
    //var case31={name:"B Bird car holder",price:"25",image:"images/case31.png"};
    var case32={name:"Magnetic holder(air vent or wind",price:"25",image:"images/case32.png"};
    var case33={name:"Auto clamp crab holde",price:"30",image:"images/case33.png"};
    var case34={name:"Auto clamp extension holder",price:"35",image:"images/case34.png"};
    var case35={name:"Vonk fast charging cable(lighting/micro USB/TYPE-C)",price:"20",image:"images/case35.png"};
    var case36={name:"Vonk fast cable with auto power cut-off(lighting/micro USB/TYPE-C)",price:"30",image:"images/case36.png"};
    //var case37={name:"Hoco M35 earphone",price:"25",image:"images/case37.png"};
    //var case38={name:"Armor case with belt clip",price:"25",image:"images/case38.png"};
    var case39={name:"Card case 圆角",price:"30",image:"images/case39.png"};
    var case40={name:"Back Card case",price:"35",image:"images/case40.png"};
    var case41={name:"Heavy duty case",price:"35(5 extra for clip)",image:"images/case41.png"};
    var case42={name:"Heavy duty slim",price:"40",image:"images/case42.png"};
    //var case43={name:"Magnetic wallet with zip",price:"50",image:"images/case43.png"};
    //var case44={name:"Slim soft",price:"10",image:"images/case44.png"};
    var case45={name:"Bling armor case",price:"25",image:"images/case45.png"};
    var case46={name:"Matt armor case",price:"25",image:"images/case46.png"};
    //var case47={name:"Roar rico armor case",price:"25",image:"images/case47.png"};
    //var case48={name:"Roar mirror armor case",price:"25",image:"images/case48.png"};
    var case49={name:"Tech case (Dot)",price:"25",image:"images/case49.png"};
    //var case50={name:"Flower Case",price:"25",image:"images/case50.png"};
    //var case51={name:"Silicon cartoon case",price:"25",image:"images/case51.png"};
    //var case52={name:"Roar card case with mirror",price:"30",image:"images/case52.png"};
    //var case53={name:"Roar card case with stand",price:"30",image:"images/case53.png"};
    var case54={name:"Hanman back flip card case",price:"35",image:"images/case54.png"};
    //var case55={name:"Puloka card case",price:"35",image:"images/case55.png"};
    //var case56={name:"EFM aspen armor case",price:"35",image:"images/case56.png"};
    //var case57={name:"Metal 360 armor case",price:"40",image:"images/case57.png"};
    var case58={name:"Hanman slim",price:"30",image:"images/case58.png"};
    var case59={name:"Sonata diary",price:"30",image:"images/case59.png"};
    var case60={name:"Mansoor diary",price:"40",image:"images/case60.png"};
    var case61={name:"Hanman magnetic case (old)",price:"40",image:"images/case61.png"};
    var case62={name:"Hanman magnetic case (new) ",price:"40",image:"images/case62.png"};
    //var case63={name:"Molan Cano wallet case",price:"40",image:"images/case63.png"};
    var case64={name:"BRG magnetic big wallet",price:"50",image:"images/case64.png"};
    var case65={name:"Caseme magnetic wallet",price:"50",image:"images/case65.png"};
    //var case66={name:"EFM Monaco wallet case",price:"50",image:"images/case66.png"};
    //var case67={name:"Universal tablet case",price:"20",image:"images/case67.png"};
    //var case68={name:"Tablet Tech case",price:"25",image:"images/case68.png"};
    var case69={name:"Tablet Hanman diary case",price:"35",image:"images/case69.png"};
    var case70={name:"Kids cover - one handle",price:"40",image:"images/case70.png"};
    var case71={name:"Kids cover - two handles",price:"40",image:"images/case71.png"};
    var case72={name:"Kids cover - butterfly",price:"40",image:"images/case72.png"};
    var case73={name:"Kids cover 10.2/10.5”",price:"40",image:"images/case73.png"};
    var case74={name:"Bluetooth Keyboard Case",price:"60(mini) or 70(big)",image:"images/case74.png"};
    //var case75={name:"Mini car holder",price:"10",image:"images/case75.png"};
    //var case76={name:"Car hook",price:"20",image:"images/case76.png"};
    var case77={name:"Tablet Car holder",price:"35",image:"images/case77.png"};
    var case78={name:"Hoco lightning to type-c fast cable",price:"25",image:"images/case78.png"}; // needs image update
    var case79={name:"Hoco 3 metres cable",price:"25",image:"images/case79.png"};
    var case80={name:"Magnet",price:"5",image:"images/case80.png"};
    //var case81={name:"Popsocket (White package)",price:"10",image:"images/case81.png"};
    //var case82={name:"Sim card adapter",price:"10",image:"images/case82.png"};
    var case83={name:"Popsocket",price:"10",image:"images/case83.png"};
    //var case84={name:"Popsocket (airbag)",price:"15",image:"images/case84.png"};
    var case85={name:"Medium/ long stylus",price:"10",image:"images/case85.png"};
    //var case86={name:"Card holder with ring sticker",price:"15",image:"images/case86.png"};
    //var case87={name:"Selfie light",price:"15",image:"images/case87.png"};
    var case88={name:"Waterproof pouch",price:"20",image:"images/case88.png"}; // needs image update
    var case89={name:"Universal arm band",price:"15",image:"images/case89.png"}; // needs image update
    var case90={name:"Portable tablet stand",price:"15",image:"images/case90.png"};
    //var case91={name:"Universal belt clip",price:"20",image:"images/case91.png"};
    //var case92={name:"EFM dual wall charger",price:"30",image:"images/case92.png"};
    //var case93={name:"4 in 1 camera lens",price:"35",image:"images/case93.png"};
    var case94={name:"Bluetooth selfie stick with stand",price:"35",image:"images/case94.png"};
    //var case95={name:"Mini selfie stick",price:"35",image:"images/case95.png"};
    //var case96={name:"Cord car charger",price:"20",image:"images/case96.png"};
    var carcharger1={name:"3sixt 3.4A car charger set (with cable)",price:"30",image:"images/case97.png"};
    var carcharger2={name:"3sixt 5.4A quick car charger",price:"30",image:"images/case98.png"}; // needs image update
    //var case99={name:"3sixt 5.4A quick car charger set (with cable)",price:"40",image:"images/case99.png"};
    var airpodcover1={name:"Airpods / Airpods pro rubber cover",price:"30",image:"images/case100.png"}; // needs image update
    var airpodcover2={name:"Airpods pro leather looking cover",price:"25",image:"images/case101.png"}; // needs image update
    var watchband1={name:"Nylon watch bands",price:"25",image:"images/case102.png"};
    var watchband2={name:"Milane watch bands",price:"40",image:"images/case103.png"};
    var watchband3={name:"Stainless steel watch bands",price:"60",image:"images/case104.png"};
    //var case105={name:"Stainless steel premium watch bands",price:"70",image:"images/case105.png"};
    var case106={name:"Soft 拉丝",price:"20",image:"images/case106.png"}; 

    //Iphone
    // var iphone5c = {name:"Iphone 5c", desc:"[bright color]", image:"images/iphones/iphone5c.png"};
    // var iphone6_6plus = {name:"Iphone 6/6s/6 Plus/6s Plus", desc:"[4.7/5.5 inches, round edge, have earphone plug]", image:"images/iphones/iphone6_6plus.png"};
    // var iphone7_8 = {name:"Iphone 7/8", desc:"[4.7 inches, bottom speakers are symmetrical, no earphone plug]", image:"images/iphones/iphone7_8.png"};
    // var iphone7plus_8plus = {name:"Iphone 7/8 plus", desc:"[5.5 inches, bottom speakers are symmetrical, no earphone plug]", image:"images/iphones/iphone7plus_8plus.png"};
    // var iphonex_xs = {name:"Iphone X/XS", desc:"[5.8 inches,Two rear cameras, rounded edge]", image:"images/iphones/iphonex_xs.png"};
    // var iphonexr = {name:"Iphone XR ", desc:"[6.1 inches, one camera and one flashlight, rounded edge]", image:"images/iphones/iphonexr.png"};
    // var iphonexsmax = {name:"Iphone XS MAX", desc:"[6.5 inches, two cameras and one flashlight, rounded edge]", image:"images/iphones/iphonexsmax.png"};
    // var iphone11 = {name:"Iphone11", desc:"[6.1 inches, two rear cameras, rounded edge]", image:"images/iphones/iphone11.png"};
    // var iphone11pro = {name:"Iphone11 Pro", desc:"[5.8 inches, triple rear cameras, rounded edge]", image:"images/iphones/iphone11pro.png"};
    // var iphone11promax = {name:"Iphone11 Pro Max", desc:"[6.5 inches, triple rear cameras, rounded edge]", image:"images/iphones/iphone11promax.png"};
    // var iphone12mini = {name:"Iphone 12 mini", desc:"[5.4 inches, two rear cameras, vertical edge]", image:"images/iphones/iphone12mini.png"};
    // var iphone12 = {name:"Iphone 12", desc:"[6.1 inches, two rear cameras align vertically, vertical edge]", image:"images/iphones/iphone12.png"};
    // var iphone12pro = {name:"Iphone 12 Pro", desc:"[6.1 inches, triple rear cameras, vertical edge]", image:"images/iphones/iphone12pro.png"};
    // var iphone12promax = {name:"Iphone 12 Pro Max", desc:"[6.7 inches, triple rear cameras, vertical edge]", image:"images/iphones/iphone12promax.png"};
    // var iphone13mini = {name:"Iphone 13 mini", desc:"[5.4 inches, two rear cameras, vertical edge]", image:"images/iphones/iphone13mini.png"};
    // var iphone13_14 = {name:"Iphone 13/14", desc:"[6.1 inches, two rear cameras aligned diagonally, vertical edge]", image:"images/iphones/iphone13_14.png"};
    // var iphone13pro = {name:"Iphone 13 Pro", desc:"[6.1 inches, triple rear cameras, top speaker is touching the edge, vertical edge]", image:"images/iphones/iphone13pro.png"};
    // var iphone13promax = {name:"Iphone 13 Pro Max", desc:"[6.7 inches, triple rear cameras, top speaker is touching the edge, vertical edge]", image:"images/iphones/iphone13promax.png"};
    // var iphone14plus = {name:"Iphone 14 plus", desc:"[6.7 inches, two rear cameras aligned diagonally, vertical edge]", image:"images/iphones/iphone14plus.png"};
    // var iphone14pro = {name:"Iphone 14 Pro", desc:"[6.1 inches, triple rear cameras, vertical edge]", image:"images/iphones/iphone14pro.png"};
    // var iphone14promax = {name:"Iphone 14 Pro Max", desc:"[6.7 inches, triple rear cameras, vertical edge]", image:"images/iphones/iphone14promax.png"};

    //Ipad
    // var ipadmini3 = {name:"IPAD mini 3", desc:"[Microphone hole in the middle, touch ID unlock, single camera, slient button]", image:"images/ipad1.png"};
    // var ipadmini1_2 = {name:"IPAD mini/mini 2", desc:"[Microphone hole in the middle, no Touch ID unlock, single camera, slient button]", image:"images/ipad2.png"};
    // var ipadmini4 = {name:"IPAD mini 4", desc:"[Touch ID unlock, no silence button, microphone hole on the right of camera]", image:"images/ipad3.png"};
    // var ipadmini5 = {name:"IPAD mini5(2019)", desc:"[Touch ID unlock, no silence button, one microphone hole on the back middle]", image:"images/ipad4.png"};
    // var ipad2_3_4 = {name:"IPAD 2/3/4th generation", desc:"[Wide bezel on the front, large charge port, 9.7 inches]", image:"images/ipad5.png"};
    // var ipadair1 = {name:"IPAD Air1", desc:"[9.7 inches, No finger print access, single camera, microphone in the middle]", image:"images/ipad6.png"};
    // var ipadair2 = {name:"IPAD Air2", desc:"[9.7 inches, Finger print access, no silent button, tiny microphone on the right of rear camera, ]", image:"images/ipad7.png"};
    // var ipadair3 = {name:"IPAD Pro 10.5 inch", desc:"[10.5 inches, Vertical shape, camera on top, no flash light, has home button]", image:"images/ipad20.png"};
    // var ipad5_6 = {name:"IPAD 5/6th Generation", desc:"[9.7 inches, Camera only, no flash light, touch ID home button, no silent button, microphone at the middle]", image:"images/ipad8.png"};
    // var ipadpro_11inch_2018 = {name:"IPAD Pro 11(2018)", desc:"[Many pin holes on top, no home button]", image:"images/ipad9.png"};
    // var ipadpro_129inch_2015 = {name:"IPAD Pro 12.9inch(2015)", desc:"[12.9 inches, camera and flash light beside each other, has home button]", image:"images/ipad10.png"};
    // var ipadpro_129inch_2017 = {name:"IPAD Pro 12.9inch(2017)", desc:"[12.9 inches, vertical shape, camera on top and flash light under, has home button]", image:"images/ipad11.png"};
    // var ipadpro_105inch = {name:"IPAD Pro 10.5 inch", desc:"[Vertical shape, camera on top and flash light under, has home button]", image:"images/ipad12.png"};
    // var ipadpro_97inch = {name:"IPAD Pro 9.7 inch(2016)", desc:"[Camera above the flash light]", image:"images/ipad13.png"};
    // var ipadair4_5 = {name:"IPAD Air 4/5", desc:"[Touch ID, no silent button & no home button, no flash light, microphone on the middle, square edge]", image:"images/ipad14.jpg"};
    // var ipadpro_129inch_2020_2021_2022 = {name:"IPAD Pro 12.9(2020/2021/2022)", desc:"[12.9 inches, back island camera, no home button, square edge]", image:"images/ipad15.png"};
    // var ipadpro_11inch_2020_2021_2022 = {name:"iPad Pro 11 (2020/2021/2022)", desc:"[11 inches, back island camera, no home button, square edge]", image:"images/ipad16.png"};
    // var ipadpro_129inch_2018 = {name:"iPad Pro 12.9 (2018)", desc:"[12.9 inches, no home button, no framing on the rear camera, flash light right under, top and bottom both having speakers]", image:"images/ipad17.png"};
    // var ipad10 = {name:"iPad 10th Generation", desc:"[10.9 inches, Touch ID unlock, no home button, support 1st Gen Apple Pencil only]", image:"images/ipad18.png"};
    // var ipad7_8_9 = {name:"iPad 7/8/9th Generation", desc:"[10.2 inches, has home button, rounded edge]", image:"images/ipad19.png"};

    //三星手机
    // var samsungS10_S10plus = {name:"Samsung S10/S10+", desc:"[6.4/6.7 inches, three camera lens with flash light]", image:"images/samsung1.png"};
    // var samsungS8_S8plus = {name:"Samsung S8/S8+", desc:"[5.8/6.2 inches, three objects on the back, flash light, square camera, fingerprint unlock]", image:"images/samsung2.png"};
    // var samsungS9_S9plus = {name:"Samsung S9/S9+", desc:"[5.8/6.2 inches, camera above fingerprint, fingerprint recognition on the back, small rectangle glass lense beside]",image:"images/samsung3.png"};
    // var samsungS7 = {name:"Samsung S7", desc:"[5.1 inches, home button, square framed camera, flash light on the right, single hole at the top]", image:"images/samsung4.png"};
    // var samsungS7edge = {name:"Samsung S7 Edge", desc:"[5.5 inches, edge curved screen, home button, square framed camera on back, flash light on the right]", image:"images/samsung5.png"};
    // var samsungNote10_Note10plus = {name:"Samsung Note 10/10Plus", desc:"[6.3/6.8 inches, long thin cameras frame]", image:"images/samsung7.png"};
    // var samsungNote9 = {name:"Samsung Note9", desc:"[6.4 inches, back is the shape of “丅”]", image:"images/samsung8.png"};
    // var samsungNote8 = {name:"Samsung Note8", desc:"[6.3 inches]", image:"images/samsung9.png"};
    // var samsungS3 = {name:"Samsung S3", desc:"[4.8 inches, round corner, 3 objects at the back in the layout of 'left, middle, and right']", image:"images/samsung10.png"};
    // var samsungS4 = {name:"Samsung S4", desc:"[5 inches, ertically laid camera and flash light, linear speaker on the bottom left up]", image:"images/samsung11.png"};
    // var samsungS6 = {name:"Samsung S6", desc:"[5.1 inches, camera is at the left, two holes at the top]", image:"images/samsung12.png"};
    // var samsungS6edge = {name:"Samsung S6 Edge", desc:"[5.1 inches, curved screen, two holes at the top]", image:"images/samsung13.png"};
    // var samsungNote3 = {name:"Samsung Note3", desc:"[5.7 inches, has home button, pen hole at bottom left]", image:"images/samsung14.png"};
    // var samsungNote4 = {name:"Samsung Note4", desc:"[5.7 inches, pen hole and linear speaker on the bottom left part]", image:"images/samsung15.png"};
    // var samsungNote5 = {name:"Samsung Note5", desc:"[5.7 inches, has home button, camera and flash light from left to right, pen hole on the bottom left]", image:"images/samsung16.png"};
    // var samsungJ2pro = {name:"Samsung J2 Pro(2018)", desc:"[5 inches, round corners all around, thin linear shape beside the camera island]", image:"images/samsung17.png"};
    // var samsungJ8 = {name:"Samsung J8", desc:"[6 inches, two cameras, fingerprint unlock, no home button]", image:"images/samsung19.png"};
    // var samsungA8 = {name:"Samsung A8", desc:"[5.7 inches]", image:"images/samsung20.png"}
    // var samsungA20_A30 = {name:"Samsung A20/30", desc:"[6.4 inches, one dot camera front, fingerprint access at the back, two camers on back, one singled out flash light below]", image:"images/samsung22.png"};
    // var samsungA50 = {name:"Samsung A50", desc:"[One dot camera front, three cameras + one singled out flash light, no fingerprint access on back]", image:"images/samsung23.png"};
    // var samsungS21 = {name:"Samsung Galaxy S21", desc:"[6.2 inches, three outstanding eyes recessed into metal module, stand alone flash light beside Matte Glass front and glass back]", image:"images/samsung24.jpg"};
    // var samsungS21plus = {name:"Samsung Galaxy S21 plus", desc:"[6.7 inches, three cameras lined up vertically and one flash light set alone.]", image:"images/samsung25.jpg"};
    // var samsungS21Ultra = {name:"Samsung Galaxy S21 Ultra", desc:"[6.8 inches, glass front and glass back with S PEN A slightly wide island module on the back 4 cameras]", image:"images/samsung26.jpg"};
    // var samsungS20FE = {name:"Samsung Galaxy S20 FE", desc:"[6.5 inches, phone body is bigger than s20. Plastic back. S20  flagship is with glass back. S20 FE front screen flat, s20 curved screen.]", image:"images/samsung27.jpg"};
    // var samsungS20Ultra = {name:"Samsung Galaxy S20 ultra", desc:"[6.9 inches, 4 cameras One stand out telephoto camera below]", image:"images/samsung28.jpg"};
    // var samsungNote20 = {name:"Samsung Galaxy Note 20", desc:"[6.7 inches, glass front / plastic back]", image:"images/samsung29.jpg"};
    // var samsungNote20Ultra = {name:"Samsung Galaxy Note 20 ultra", desc:"[6.9 inches, glass front / glass back, laser auto focus sensor under flash]", image:"images/samsung30.jpg"};
    // var samsungJ7pro = {name:"Samsung J7 Pro 2017", desc:"[5.5 inches, camera and flashlight cover by straight black outline]", image:"images/samsung31.png"};
    // var samsungJ5pro = {name:"Samsung J5 Pro 2017", desc:"[5.2 inches, camera and flashlight cover by straight black outline]", image:"images/samsung32.png"};
    // var samsungJ7prime = {name:"Samsung J7 Prime (2016)", desc:"[5.5 inches, Single Camera in the middle with flash on the right]", image:"images/samsung33.png"};
    // var samsungJ5prime = {name:"Samsung J5 Prime (2016)", desc:"[5 inches, Single Camera in the middle with flash on the right]", image:"images/samsung34.png"};
    // var samsungA51 = {name:"Samsung A51 (2019)", desc:"[6.5 inches, 4 Camera with flash light]", image:"images/samsung35.png"};
    // var samsungA70 = {name:"Samsung A70 (2019)", desc:"[6.7 inches, Three cameras + one singled out flash light, no fingerprint access at the back]", image:"images/samsung36.png"};
    // var samsungS20 = {name:"Samsung Galaxy S20", desc:"[6.2 inches]", image:"images/samsung39.png"}; // Missing description
    // var samsungS20plus = {name:"Samsung Galaxy S20 Plus", desc:"[6.7 inches]", image:"images/samsung38.png"}; // Missing description
    // var samsungS21FE = {name:"Samsung Galaxy S21 FE", desc:"[6.4 inches, flat screen, 2022]", image:"images/samsung40.png"}; // Missing description
    // var samsungS22 = {name:"Samsung Galaxy S22", desc:"[6.1 inches, flat screen, 2022]", image:"images/samsung41.png"}; // Missing description
    // var samsungS22plus = {name:"Samsung Galaxy S22 Plus", desc:"[6.6 inches, flat screen, 2022]", image:"images/samsung42.png"}; // Missing description
    // var samsungS22Ultra = {name:"Samsung Galaxy S22 Ultra", desc:"[6.7 inches, 5 cameras, curved screen, with S Pen avaliable]", image:"images/samsung43.png"};
    
    //其它小型号手机
    //var otherPhone1 = {name:"HUAWEI P30", desc:"[6.15 inches，one dot camera front, oval round shape of fingerprint access on back, three cameras and one singled out  flash light, log at the left bottom corner]", image:"images/otherPhone1.png"};
    //var otherPhone2 = {name:"HUAWEI P30 Pro", desc:"[6.47 inches，one dot camera front, three cameras framed on one island, bottom left logo]", image:"images/otherPhone2.png"};
    //var otherPhone3 = {name:"HUAWEI Mate20", desc:"[6.53 inches，square island on the back with 3 cameras and one flash light, fingerprint access on the back]", image:"images/otherPhone3.png"};
    //var otherPhone4 = {name:"HUAWEI Mate20 Pro", desc:"[6.39 inches，square framed rear cameras, left top is flash light, no fingerprint access]", image:"images/otherPhone4.png"};
    //var otherPhone5 = {name:"HUAWEI Mate30 Pro", desc:"[6.53 inches，three cameras front, four cameras back on round swirl shape]", image:"images/otherPhone5.png"};
    //var otherPhone6 = {name:"HUAWEI P20", desc:"[5.8 inches]", image:"images/otherPhone6.png"};
    //var otherPhone7 = {name:"HUAWEI Nova 3i", desc:"[6.3 inches，a straight recessed line front ( camera and other stuff ); two cameras, flash light and touch ID at the back side]", image:"images/otherPhone7.png"};
    var pixel4 = {name:"Google Pixel 4", desc:"[5.7 inches，square island top left on back, flash light on the bottom of the island, Front one single line black]", image:"images/otherPhone8.png"};
    var pixel3_3XL = {name:"Google Pixel 3/3 XL", desc:"[5.5/6.3 inches]", image:"images/otherPhone9.png"};
    var pixel3a_3aXL = {name:"Google Pixel 3a/ 3a XL", desc:"[5.6/6 inches]", image:"images/otherPhone10.png"};
    var pixel2 = {name:"Google Pixel 2", desc:"[5 inches，top and bottom linear speaker on front, flash light before camera, two pin holes microphone below]", image:"images/otherPhone11.png"};
    var oppoA57 = {name:"OPPO A57", desc:"[One camera, microphone in between, flash light]", image:"images/otherPhone12.png"};
    var oppoR17pro = {name:"OPPO R17 Pro", desc:"[6.4 inches, three cameras on the middle top]", image:"images/otherPhone13.png"};
    var oppoAx5 = {name:"OPPO Ax5", desc:"[6.2 inches, two camera lens and flash light on the back]", image:"images/otherPhone14.png"};
    //var otherPhone15 = {name:"HUAWEI P20 Pro (2018)", desc:"[6.1 inches, home button in the front side, three cameras and flash light at the back]", image:"images/otherPhone15.png"};
    //var otherPhone16 = {name:"HUAWEI P20 Lite / Nova 3e", desc:"[5.84 inches, no home button, has fingerprint access on the back, two cameras with flash, no speaking on the back]", image:"images/otherPhone16.png"};
    //var otherPhone17 = {name:"HUAWEI Mate 10 (2017)", desc:"[5.9 inches, Have Home Button]", image:"images/otherPhone17.png"};
    //var otherPhone18 = {name:"HUAWEI Mate 10 Lite/ Nova 2i (2017)", desc:"[5.9 inches, two camera in one slot, flash on top of the camera, fingerprint access on the back, no home button]", image:"images/otherPhone18.png"};
    //var otherPhone19 = {name:"HUAWEI Mate 9 (2016)", desc:"[5.9 inches]", image:"images/otherPhone19.png"};
    var pixel2XL = {name:"Pixel 2 XL (2017)", desc:"[6 inches, front speaker on the very top of the screen]", image:"images/otherPhone20.png"};
    var pixel1 = {name:"Pixel  (2016)", desc:"[5 inches, fingerprint access on the back, Flash -> Camera -> Speaker on the top]", image:"images/otherPhone21.png"};
    var pixelXL = {name:"Pixel  XL (2016)", desc:"[5.5 inches, Fingerprint access on the back, Flash -> Camera -> Speaker on the top, Cases normally (Camera Part) have a long hole]", image:"images/otherPhone22.png"};
    var oppoR17 = {name:"R17 (2018)", desc:"[6.4 inches, two camera lens with flash light, only one front camera]", image:"images/otherPhone23.png"};
    var oppoR15 = {name:"R15 (2018)", desc:"[6.28 inches, two camera lens with flash light located on the right (similar to ip8 plus), fingerprint access on the back]", image:"images/otherPhone24.png"};
    var oppoR11 = {name:"R11(2017)", desc:"[5.5 inches, two camera lens with flash light located on the right (similar to ip8 plus), has Home button, no fingerprint access]", image:"images/otherPhone25.png"};
    var oppoR11plus = {name:"R11 Plus (2017)", desc:"[6 inches, two camera lens with flash light located on the right (similar to ip8 plus), has Home button, no fingerprint access]", image:"images/otherPhone26.png"};
    var oppoR11s = {name:"R11s (2017)", desc:"[6.01 inches, two camera lens with flash light located on the right (similar to ip8 plus), no home button, fingerprint access on the back]", image:"images/otherPhone27.png"};
    var oppoR11splus = {name:"R11s Plus (2017)", desc:"[6.43 inches, two camera lens with flash light located on the right (similar to ip8 plus), no home button, fingerprint access on the back]", image:"images/otherPhone28.png"};

    //小型号平板，三星平板
    var otherTablet1 = {name:"OTab A 10.1” T510 (2019)", desc:"[Camera on the left corner in square shape]", image:"images/otherTab1.png"};
    var otherTablet2 = {name:"Tab A 8” T290 (2019)", desc:"[Camera on the left corner in square shape Same as Tab A 10.1” T510, just in smaller size]", image:"images/otherTab2.png"};
    var otherTablet3 = {name:"Tab A 10.5” T590 (2018)", desc:"[Camera located in the top middle part Flash light just under the camera]", image:"images/otherTab3.png"};
    var otherTablet4 = {name:"Tab A 8” T380 (2017)", desc:"[Camera located in the top middle part Flash light just under the camera]", image:"images/otherTab4.png"};
    var otherTablet5 = {name:"Tab A 7” T280 (2016)", desc:"[Speaker on the left, Camera in the top middle part, *Only this tablet has the speaker on the left]", image:"images/otherTab5.png"};
    var otherTablet6 = {name:"Tab A 10.1” P580 (2016)", desc:"[*Tablet with a pen, *Case have a extra pen space for it]", image:"images/otherTab6.png"};
    var otherTablet7 = {name:"Tab A 10.1” T580 (2016)", desc:"[Camera located in the top middle part Flash, light located on the right size, no pen]", image:"images/otherTab7.png"};
    var otherTablet8 = {name:"Tab A 8” T350 (2015)", desc:"[Single square camera]", image:"images/otherTab8.png"};
    var otherTablet9 = {name:"S6 10.5” T860 (2019)", desc:"[The only one table which has two camera lens in one slot, Pen located on the back below camera]", image:"images/otherTab9.png"};
    var otherTablet10 = {name:"S5e 10.5” T720 (2019)", desc:"[Square camera on the top left]", image:"images/otherTab10.png"};
    var otherTablet11 = {name:"S4 10.5” T830 (2018)", desc:"[Square camera on the middle top, Flash light just under the camera]", image:"images/otherTab11.png"};
    var otherTablet12 = {name:"S3 9.7” T820 (2017)", desc:"[Square camera on the middle top Flash light just under the camera]", image:"images/otherTab12.png"};
    var otherTablet13 = {name:"S2 8” T710 (2015)", desc:"[One single camera on the back]", image:"images/otherTab13.png"};
    
    //iphone 题库； iphone, ipad, 三星主流型号题库， 以及小型号手机题库 共同组成主页上的 “phone/ipad model identification” ；可加入型号
    var iphoneList = new this.Array();
    // var iphoneList = new this.Array(iphone6_6plus, iphone7_8, iphone7plus_8plus, 
    //     iphonex_xs, iphonexr, iphonexsmax, 
    //     iphone11, iphone11pro, iphone11promax,
    //     iphone12mini, iphone12, iphone12pro, iphone12promax, 
    //     iphone13mini, iphone13_14, iphone13pro, iphone13promax, 
    //     iphone14plus, iphone14pro, iphone14promax);

    //ipad 题库，同时也是day2 题库； 此外， iphone, ipad, 三星主流型号题库， 以及小型号手机题库 共同组成主页上的 “phone/ipad model identification” ；可加入型号
    var ipadList = new this.Array();
    // var ipadList = new this.Array(
    //     ipadmini1_2, ipadmini3, ipadmini4, ipadmini5,
    //     ipadair1, ipadair2, ipadair3, ipadair4_5,
    //     ipad2_3_4, ipad5_6, ipad7_8_9, ipad10,
    //     ipadpro_97inch, ipadpro_105inch,
    //     ipadpro_11inch_2018, ipadpro_11inch_2020_2021_2022,
    //     ipadpro_129inch_2015, ipadpro_129inch_2017, ipadpro_129inch_2018,  ipadpro_129inch_2020_2021_2022);
    
    //三星主流手机型号题库； iphone, ipad, 三星主流型号题库， 以及小型号手机题库 共同组成主页上的 “phone/ipad model identification” ；可加入型号
    var samsungList = new this.Array();
    // var samsungList = new this.Array(
    //     samsungS20, samsungS20plus, samsungS20Ultra, samsungS20FE,
    //     samsungS21, samsungS21plus, samsungS21Ultra, samsungS21FE,
    //     samsungS22, samsungS22plus, samsungS22Ultra,
    //     samsungNote20, samsungNote20Ultra, samsungNote10_Note10plus);

    //小型号手机题库； iphone, ipad, 三星主流型号题库， 以及小型号手机题库 共同组成主页上的 “phone/ipad model identification” ；可加入型号
    var otherPhoneList = new this.Array();
    // var otherPhoneList = new this.Array(
    //     pixel1, pixelXL, pixel2, pixel2XL, pixel3_3XL, pixel3a_3aXL, pixel4,
    //     oppoA57, oppoAx5, 
    //     oppoR11, oppoR11plus, oppoR11s, oppoR11splus, oppoR15, oppoR17, oppoR17pro);

    //店内产品题库， 也就是主页上的"case and accessaries identification" ；可加入产品
    var caseList = new this.Array();
    // var caseList=new Array(case8, case10, case12, case14, case20, case21, case23, case24, case25, case26, case27, case28, case29, case30,
    //     case32, case33, case34, case35, case36, case39, case40, case41, case42, case45, case46, case49,
    //     case54, case58, case59, case60, case61, case62, case64, case65, case69, case70, case71, case72, case73,
    //     case74, case77, case78, case79, case80, case83, case85, case88, case89, case90, case94,
    //     carcharger1, carcharger2, airpodcover1, airpodcover2, watchband1, watchband2, watchband3, case106);
    //三星平板题库，也就是主页上的 “samsung tablet model identification”；可加入型号
    var otherTabList = new this.Array();
    // var otherTabList=new Array(otherTablet1, otherTablet2, otherTablet3, otherTablet4, otherTablet5, otherTablet6, otherTablet7, otherTablet8, otherTablet9, otherTablet10, otherTablet11,
    //     otherTablet12, otherTablet13);
    //day1 多选题题库(day1默认包含所有iPhone型号，即iphoneList的内容)； 可加入型号
    //day1: 先问完Samsung再问iPhone型号
    //var day1List = samsungList;
    //var day1bList = iphoneList;
    var day1List = new this.Array();
    var day1bList = new this.Array();
    //day2 默认为ipad题库
    //var day2List = ipadList;
    var day2List = new this.Array();
    //day3 多选题题库；可加入产品
    var day3List = new this.Array(case77, case78, case79, case80, case83, case85, case88, case89, case90,
        case94, carcharger1, carcharger2, airpodcover1, airpodcover2, watchband1, watchband2, watchband3);

    //以下18行不建议修改
    var caseI = 1;
    var modelI = 1;
    var stabI = 1;
    var day1I = 1;
    var day2I = 1;
    var day3I = 1;
    var caseScore = 0;
    var phoneScore = 0;
    var stabScore = 0;
    var day1MultiScore = 0;
    var day2MultiScore = 0;
    var day3MultiScore = 0;
    var caseQuestionList = [];
    var phoneQuestionList = [];
    var stabQuestionList = [];
    var day1QuestionList = [];
    var day2QuestionList = [];
    var day3QuestionList = [];



    // Called at the beginning
    var initializeDisplay = function() {
        document.getElementById("learnDiv").style.display = "block";
    }
    // Called at the end
    var initializeDatabase = function() {
        iphoneList.forEach(element => {
            document.getElementById('iphoneDatabase').insertAdjacentHTML(
                'beforeend',
                '<div class="grid-item">' + element.name + '</div>'      
            )
        });
        ipadList.forEach(element => {
            document.getElementById('ipadDatabase').insertAdjacentHTML(
                'beforeend',
                '<div class="grid-item">' + element.name + '</div>'      
            )
        });
        samsungList.forEach(element => {
            document.getElementById('samsungDatabase').insertAdjacentHTML(
                'beforeend',
                '<div class="grid-item">' + element.name + '</div>'      
            )
        });
        otherTabList.forEach(element => {
            document.getElementById('samsungTabletDatabase').insertAdjacentHTML(
                'beforeend',
                '<div class="grid-item">' + element.name + '</div>'      
            )
        });
        otherPhoneList.forEach(element => {
            document.getElementById('otherPhoneDatabase').insertAdjacentHTML(
                'beforeend',
                '<div class="grid-item">' + element.name + '</div>'      
            )
        });
        caseList.forEach(element => {
            document.getElementById('accessoriesDatabase').insertAdjacentHTML(
                'beforeend',
                '<div class="grid-item">' + element.name + '</div>'      
            )
        });
    }
    //hide all page for showing the right page
    var resetDisplay = function(){
        document.getElementById("learnDiv").style.display = "none";
        document.getElementById("caseDiv").style.display = "none";
        document.getElementById("phoneDiv").style.display = "none";
        document.getElementById("generalDiv").style.display = "none";
        document.getElementById("stabDiv").style.display = "none";
        document.getElementById("databaseDiv").style.display = "none";
        document.getElementById("day1MultiDiv").style.display = "none";
        document.getElementById("day2MultiDiv").style.display = "none";
        document.getElementById("day3MultiDiv").style.display = "none";
        document.getElementById("day1FillDiv").style.display = "none";
        document.getElementById("day2FillDiv").style.display = "none";
        document.getElementById("day3FillDiv").style.display = "none";
    }


    var otherPhoneQuestionGen = function(){
        // 6個parameter作用如下:
        // 1: 需要引用的題庫
        // 2, 3: 決定問題的數量,於此兩個變數中取最小值(例子: 若otherPhoneList小於10, 則取otherPhoneList的length, 否則取10)
        // 4, 5: HTML class reference, 用來正確顯示排版 (詳見generateMultipleChoiceQuestions() 裡的註解)
        // 6: 将刚才生成的（关于题目选项）html和下列（关于题目说明的）html一起加入...QuestionList，每当需要在页面上显示一道新题目时，就从这个list中抛出一道；具体详见文件底部的一系列click function 
        generateMultipleChoiceQuestions(otherPhoneList, 10, otherPhoneList.length, 'answer-phone', 'modelContinue', phoneQuestionList);
    }
    var day1Gen = function(){
        generateMultipleChoiceQuestions(day1List, 5, day1List.length, 'answer-day1', 'day1Continue', day1QuestionList);
    }
    var day1bGen = function(){
        generateMultipleChoiceQuestions(day1bList, 5, day1bList.length, 'answer-day1', 'day1Continue', day1QuestionList);
    }
    var day2Gen = function(){
        generateMultipleChoiceQuestions(day2List, 10, day2List.length, 'answer-day2', 'day2Continue', day2QuestionList);
    }
    var day3Gen = function(){
        generateMultipleChoiceQuestions(day3List, 10, day3List.length, 'answer-day3', 'day3Continue', day3QuestionList);
    }
    var samsungQuestionGen = function(){
        generateMultipleChoiceQuestions(samsungList, 10, samsungList.length, 'answer-phone', 'modelContinue', phoneQuestionList);
    }
    var samsungTabQuestionGen = function(){
        generateMultipleChoiceQuestions(otherTabList, 10, otherTabList.length, 'answer-stab', 'stabContinue', stabQuestionList);
    }
    var ipadQuestionGen = function(){
        generateMultipleChoiceQuestions(ipadList, 10, ipadList.length, 'answer-phone', 'modelContinue', phoneQuestionList);
    }
    var phoneQuestionGen = function(){
        generateMultipleChoiceQuestions(iphoneList, 10, iphoneList.length, 'answer-phone', 'modelContinue', phoneQuestionList);
    }
    var caseQuestionGen = function(){
        // 與generateMultipleChoiceQuestions() 大同小異
        generateMultipleChoiceQuestionsForCase(caseList, 10, 10, 'answer-case', 'caseContinue', caseQuestionList);
    }

    //下列50行均为导航栏点击函数，每当一个导航栏按键被点击，触发resetDisplay函数隐藏页面上所有内容，然后让特定内容重新显示；复用代码时注意id要与html文件中的id相匹配
    this.document.getElementById("learnButton").onclick = function(){
        resetDisplay();
        document.getElementById("learnDiv").style.display = "block";
    }

    this.document.getElementById("caseTestButton").onclick = function(){
        resetDisplay();
        document.getElementById("caseDiv").style.display = "block";
    }

    this.document.getElementById("modelTestButton").onclick = function(){
        resetDisplay();
        document.getElementById("phoneDiv").style.display = "block";
    }

    this.document.getElementById("stabTestButton").onclick = function(){
        resetDisplay();
        document.getElementById("stabDiv").style.display = "block";
    }

    this.document.getElementById("databaseButton").onclick = function(){
        resetDisplay();
        document.getElementById("databaseDiv").style.display = "block";
    }

    this.document.getElementById("day1Multi").onclick = function(){
        resetDisplay();
        document.getElementById("day1MultiDiv").style.display = "block";
    }

    this.document.getElementById("day2Multi").onclick = function(){
        resetDisplay();
        document.getElementById("day2MultiDiv").style.display = "block";
    }

    this.document.getElementById("day3Multi").onclick = function(){
        resetDisplay();
        document.getElementById("day3MultiDiv").style.display = "block";
    }

    this.document.getElementById("day1Fill").onclick = function(){
        resetDisplay();
        document.getElementById("day1FillDiv").style.display = "block";
    }

    this.document.getElementById("day2Fill").onclick = function(){
        resetDisplay();
        document.getElementById("day2FillDiv").style.display = "block";
    }

    this.document.getElementById("day3Fill").onclick = function(){
        resetDisplay();
        document.getElementById("day3FillDiv").style.display = "block";
    }


    //点击选择题选项时触发的函数
    $(document).on('click','.answer-case',function(){ //触发索引使用的class name需与生成题目选项（之前的..Gen系列函数）时的class name匹配
        $(".answer-case").removeClass("btn-success"); //使用Bootstrap框架改颜色
        $(".answer-case").removeClass("btn-danger");
        $(".answer-case").addClass("btn-secondary");
        $(".right-answer.answer-case").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-case right-answer"); //正确答案变绿
        $(".wrong-answer.answer-case").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-case wrong-answer"); //错误答案变红
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            caseScore++; //如果点击的选项时正确答案，分数加1
        } 
    });

    $(document).on('click','.answer-phone',function(){
        $(".answer-phone").removeClass("btn-success");
        $(".answer-phone").removeClass("btn-danger");
        $(".answer-phone").addClass("btn-secondary");
        $(".right-answer.answer-phone").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-phone right-answer");
        $(".wrong-answer.answer-phone").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-phone wrong-answer");
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            phoneScore++;
        }    
    });

    $(document).on('click','.answer-stab',function(){
        $(".answer-stab").removeClass("btn-success");
        $(".answer-stab").removeClass("btn-danger");
        $(".answer-stab").addClass("btn-secondary");
        $(".right-answer.answer-stab").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-stab right-answer");
        $(".wrong-answer.answer-stab").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-stab wrong-answer");
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            stabScore++;
        }    
    });

    $(document).on('click','.answer-day1',function(){
        $(".answer-day1").removeClass("btn-success");
        $(".answer-day1").removeClass("btn-danger");
        $(".answer-day1").addClass("btn-secondary");
        $(".right-answer.answer-day1").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-day1 right-answer");
        $(".wrong-answer.answer-day1").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-day1 wrong-answer");
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            day1MultiScore++;
        }    
    });

    $(document).on('click','.answer-day2',function(){
        $(".answer-day2").removeClass("btn-success");
        $(".answer-day2").removeClass("btn-danger");
        $(".answer-day2").addClass("btn-secondary");
        $(".right-answer.answer-day2").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-day2 right-answer");
        $(".wrong-answer.answer-day2").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-day2 wrong-answer");
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            day2MultiScore++;
        }    
    });

    $(document).on('click','.answer-day3',function(){
        $(".answer-day3").removeClass("btn-success");
        $(".answer-day3").removeClass("btn-danger");
        $(".answer-day3").addClass("btn-secondary");
        $(".right-answer.answer-day3").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-day3 right-answer");
        $(".wrong-answer.answer-day3").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-day3 wrong-answer");
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            day3MultiScore++;
        }    
    });

    //填空题的验证函数，点击页面上的submit按钮时触发， 此处的索引id也要与生成时的匹配
    $(document).on('click','#day1Submit',function(){
        $("#day1Submit").addClass('disabled'); //submit按钮点击一次后便不能再点
        $("#day1Submit").prop('disabled', true);
        if($("#day1Fill_1").val() == 30){
            document.getElementById("day1Fill_1_right").style.display = "block";
        }
        if($("#day1Fill_1").val() != 30){
            document.getElementById("day1Fill_1_wrong").style.display = "block";
        };
        if($("#day1Fill_2").val() == 10){
            document.getElementById("day1Fill_2_right").style.display = "block";
        }
        if($("#day1Fill_2").val() != 10){
            document.getElementById("day1Fill_2_wrong").style.display = "block";
        };
        if($("#day1Fill_3").val() == 40){
            document.getElementById("day1Fill_3_right").style.display = "block";
        }
        if($("#day1Fill_3").val() != 40){
            document.getElementById("day1Fill_3_wrong").style.display = "block";
        };
        if($("#day1Fill_4").val() == 'No'){
            document.getElementById("day1Fill_4_right").style.display = "block";
        }
        if($("#day1Fill_4").val() == 'no'){
            document.getElementById("day1Fill_4_right").style.display = "block";
        }
        if($("#day1Fill_4").val() != 'No' && $("#day1Fill_4").val() != 'no'){
            document.getElementById("day1Fill_4_wrong").style.display = "block";
        }
        if($("#day1Fill_5").val() == 'No'){
            document.getElementById("day1Fill_5_right").style.display = "block";
        }
        if($("#day1Fill_5").val() == 'no'){
            document.getElementById("day1Fill_5_right").style.display = "block";
        }
        if($("#day1Fill_5").val() != 'No' && $("#day1Fill_5").val() != 'no'){
            document.getElementById("day1Fill_5_wrong").style.display = "block";
        }
    })

    $(document).on('click','#day2Submit',function(){
        $("#day2Submit").addClass('disabled');
        $("#day2Submit").prop('disabled', true);
        if($("#day2Fill_1").val() == 25){
            document.getElementById("day2Fill_1_right").style.display = "block";
        }
        if($("#day2Fill_1").val() != 25){
            document.getElementById("day2Fill_1_wrong").style.display = "block";
        };
        if($("#day2Fill_2").val() == 35){
            document.getElementById("day2Fill_2_right").style.display = "block";
        }
        if($("#day2Fill_2").val() != 35){
            document.getElementById("day2Fill_2_wrong").style.display = "block";
        };
        if($("#day2Fill_3").val() == 25){
            document.getElementById("day2Fill_3_right").style.display = "block";
        }
        if($("#day2Fill_3").val() != 25){
            document.getElementById("day2Fill_3_wrong").style.display = "block";
        };
        if($("#day2Fill_4").val() == 40){
            document.getElementById("day2Fill_4_right").style.display = "block";
        }
        if($("#day2Fill_4").val() != 40){
            document.getElementById("day2Fill_4_wrong").style.display = "block";
        }
        if($("#day2Fill_5").val() == 40){
            document.getElementById("day2Fill_5_right").style.display = "block";
        }
        if($("#day2Fill_5").val() != 40){
            document.getElementById("day2Fill_5_wrong").style.display = "block";
        }
    })

    $(document).on('click','#day3Submit',function(){
        $("#day3Submit").addClass('disabled');
        $("#day3Submit").prop('disabled', true);
        if($("#day3Fill_1").val() == 20){
            document.getElementById("day3Fill_1_right").style.display = "block";
        }
        if($("#day3Fill_1").val() != 20){
            document.getElementById("day3Fill_1_wrong").style.display = "block";
        };
        if($("#day3Fill_2").val() == 30){
            document.getElementById("day3Fill_2_right").style.display = "block";
        }
        if($("#day3Fill_2").val() != 30){
            document.getElementById("day3Fill_2_wrong").style.display = "block";
        };
        if($("#day3Fill_3").val() == 25){
            document.getElementById("day3Fill_3_right").style.display = "block";
        }
        if($("#day3Fill_3").val() != 25){
            document.getElementById("day3Fill_3_wrong").style.display = "block";
        };
        if($("#day3Fill_4").val() == 25){
            document.getElementById("day3Fill_4_right").style.display = "block";
        }
        if($("#day3Fill_4").val() != 25){
            document.getElementById("day3Fill_4_wrong").style.display = "block";
        }
        if($("#day3Fill_5").val() == 'No'){
            document.getElementById("day3Fill_5_right").style.display = "block";
        }
        if($("#day3Fill_5").val() == 'no'){
            document.getElementById("day3Fill_5_right").style.display = "block";
        }
        if($("#day3Fill_5").val() != 'No' && $("#day1Fill_5").val() != 'no'){
            document.getElementById("day3Fill_5_wrong").style.display = "block";
        }
    })
    
    //所有...Gen 函数的功能和实现逻辑都类似，设置一个list arr以及一个list arr2, arr和arr2在初始状态下相等，即出题范围；每生成一个正确答案为i的题目，则i从arr中被剔除（即可避免重复出题）；
    //生成每个单一题目的过程中，每生成一个错误答案m,则m从arr2中被剔除（避免正确答案被混入错误答案），并在生成下一道题目时重置
    var generateMultipleChoiceQuestions = function(phoneList, maxQuestions, questionsInListLength, answerClassName, continueIDName, whereToPush) {
        var arr = phoneList.slice();
        var loopNum = Math.min(maxQuestions, questionsInListLength); //生成题目的数量，通常情況下至多有5题或10题(maxQuestions),若题库太小则取题库的大小(questionsInListLength)
        
        for(var i = 1; i <= loopNum; i++){
            var arr2 = arr.slice();
            var randomNumber = Math.floor((Math.random()*arr.length)); //随机生成正确答案的index
            var rightAnswerPlace = Math.floor((Math.random()*4)); //正确答案在题目中的位置
            var rightAnswer = arr[randomNumber]; //从出题范围中获取正确答案的具体信息
            arr.splice(randomNumber,1); //从arr1中剔除正确答案避免重复出题
            arr2.splice(randomNumber,1); //从arr2中剔除正确答案避免正确答案的选项重复出现

            //生成错误答案
            var wrongAnswer1Place = Math.floor((Math.random()*arr2.length)); //随机生成错误答案1 的index
            var wrongAnswer1 = arr2[wrongAnswer1Place]; //根据上一行随机生成的index获取错误答案1 的具体信息
            arr2.splice(wrongAnswer1Place,1); //将错误答案从arr2中剔除，避免错误答案重复出现，下同

            var wrongAnswer2Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer2 = arr2[wrongAnswer2Place];
            arr2.splice(wrongAnswer2Place,1);

            var wrongAnswer3Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer3 = arr2[wrongAnswer3Place]
            arr2.splice(wrongAnswer3Place,1);
           
            //一道选择题有四个选项，正确答案的位置由变量rightAnswerPlace决定，根据正确答案在题目中位置的不同生成不同的html； 
            //！！复用代码时注意修改class name "answer-?",即變數名稱 "answerClassName" 裡的string
            // 分別有: answer-day1, answer-day2, answer-day3, answer-phone, answer-case, answer-stab)！！
            if(rightAnswerPlace == 1){
                var answerButtons = 
                "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " right-answer'>" +rightAnswer.name + 
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer1.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer2.name + 
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 2){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " right-answer'>" + rightAnswer.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer2.name + 
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 3){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer1.name + 
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " right-answer'>" + rightAnswer.name + 
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else{
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" +wrongAnswer1.name + 
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer3.name + 
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " right-answer'>"
                + rightAnswer.name + "</button>";
            }

            //将刚才生成的（关于题目选项）html和下列（关于题目说明的）html一起加入...QuestionList，每当需要在页面上显示一道新题目时，就从这个list中抛出一道；具体详见文件底部的一系列click function 
            //题目是关于手机型号时，题目说明的内容是 “what is this model”，选项是型号名称
            //题目时关于店内产品时，题目说明的内容是 “what is this and how much is it?”, 选项是产品名称和价格；复用代码时需注意
            //！！复用代码时注意修改id "..Contiunue" ！！ 即變數名稱 "continueIDName" 裡的string
            // 分別有:day1Continue, day2Continue, day3Continue, modelContinue, caseContinue, stabContinue

            var productDescription;
            if(rightAnswer.desc != null) {
                productDescription = rightAnswer.desc + "; ";
            }
            else if(rightAnswer.desc == null) {
                productDescription = "";
            }
            var newQuestion = "<h3 style='text-align: center;'>" + productDescription + "what is this model? </h3><div class='flex_center_row row'><div class='image-box'><img src='" + rightAnswer.image + "'class='col'></div></div><div class='flex_center_row row' style='margin-top: 10px;'>" +
            answerButtons + "</div><div class='flex_center_row row' id='" + continueIDName + "' style='margin-top: 40px;'><button type='button' class='btn btn-primary col-8 continue-button' style='display: none;'>Continue</button></div>";
            whereToPush.push(newQuestion);
       }
    }

    // 與generateMultipleChoiceQuestions() 大同小異, 但須注意裡面問題的text和JSON reference有分別
    var generateMultipleChoiceQuestionsForCase = function(caseList, maxQuestions, questionsInListLength, answerClassName, continueIDName, whereToPush) {
        var arr = caseList.slice();
        var loopNum = Math.min(maxQuestions, questionsInListLength);
        
        for(var i = 1; i <= loopNum; i++){
            var arr2 = arr.slice();
            var randomNumber = Math.floor((Math.random()*arr.length));
            var rightAnswerPlace = Math.floor((Math.random()*4));
            var rightAnswer = arr[randomNumber];

            arr.splice(randomNumber,1);
            arr2.splice(randomNumber,1);

            var wrongAnswer1Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer1 = arr2[wrongAnswer1Place];
            arr2.splice(wrongAnswer1Place,1);

            var wrongAnswer2Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer2 = arr2[wrongAnswer2Place];
            arr2.splice(wrongAnswer2Place,1);

            var wrongAnswer3Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer3 = arr2[wrongAnswer3Place]
            arr2.splice(wrongAnswer3Place,1);
           
            if(rightAnswerPlace == 1){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case right-answer'>" +
                rightAnswer.name + " , $" + rightAnswer.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" + wrongAnswer1.name + " , $" + wrongAnswer1.price +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer2.name + " , $" + wrongAnswer2.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>"
                + wrongAnswer3.name + " , $" + wrongAnswer3.price + "</button>";
            }
            else if(rightAnswerPlace == 2){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" +
                wrongAnswer1.name + " , $" + wrongAnswer1.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case right-answer'>" + rightAnswer.name + " , $" + rightAnswer.price +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer2.name + " , $" + wrongAnswer2.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>"
                + wrongAnswer3.name + " , $" + wrongAnswer3.price + "</button>";
            }
            else if(rightAnswerPlace == 3){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" +
                wrongAnswer1.name + " , $" + wrongAnswer1.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" + wrongAnswer2.name + " , $" + wrongAnswer2.price +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " right-answer'>" + rightAnswer.name + " , $" + rightAnswer.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>"
                + wrongAnswer3.name + " , $" + wrongAnswer3.price + "</button>";
            }
            else{
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" +
                wrongAnswer1.name + " , $" + wrongAnswer1.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" + wrongAnswer2.name + " , $" + wrongAnswer2.price +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer3.name + " , $" + wrongAnswer3.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case right-answer'>"
                + rightAnswer.name + " , $" + rightAnswer.price + "</button>";
            }
            var newQuestion = "<h3 style='text-align: center;'> what is this and how much is it?</h3><div class='flex_center_row row'><div class='image-box'><img src='" + rightAnswer.image + "'class='col'></div></div><div class='flex_center_row row' style='margin-top: 10px;'>" +
            answerButtons + "</div><div class='flex_center_row row' id='" + continueIDName + "' style='margin-top: 40px;'><button type='button' class='btn btn-primary col-8 continue-button' style='display: none;'>Continue</button></div>";
            whereToPush.push(newQuestion);
        }
    }

    var main = async function() {
        // 1
        //使用async/await等待完getiPhoneSheetValues()回傳JSON檔案後，才會執行剩下的指令
        var iphoneData = await getiPhoneSheetValues();
        for (let i = 0; i < iphoneData.values.length; i++) {
            //只要name/description/image三項有一項為空，則跳過，防止因Google Sheet裡有空行而報錯
            if(!iphoneData.values[i][0] ||
                !iphoneData.values[i][1] ||
                !iphoneData.values[i][2]) {
                continue;
            }
            else {
                //先前從gsheetreader.js裡提取的URL格式長這樣：https://drive.google.com/file/d/19FJQCi6StpJDIEZzagZ6pZHn1SOtVLCx/view?usp=share_link
                //這條是Google Drive分享圖片用的連結，但這種格式會被CORS擋下，圖片會無法讀取。

                //解決辦法是先用Regex獲取URL裡面的ID，
                //注意這裡：＂match(/\/d\/(.+)\//)[1]＂這裡Regex會找到兩個結果，只有第二個值合適，填[1]取得第二個值。
                var oldUrl = iphoneData.values[i][2].match(/\/d\/(.+)\//)[1];
                //假設用上面的例子，獲取成功後的字串長這樣: 19FJQCi6StpJDIEZzagZ6pZHn1SOtVLCx
                console.log(oldUrl);
                
                var newUrl = "https://drive.google.com/uc?id=" + oldUrl;
                //沿用上面的例子，這裡newUrl的值會是：https://drive.google.com/uc?id=19FJQCi6StpJDIEZzagZ6pZHn1SOtVLCx
                //這種格式不會被CORS影響，能夠正常使用

                //把正確的值加到題庫裡
                iphoneList.push(
                    {
                        name: iphoneData.values[i][0],
                        desc: iphoneData.values[i][1],
                        image: newUrl
                    }
                );
            }
        }
        // 2
        var samsungData = await getSamsungSheetValues();
        for (let i = 0; i < samsungData.values.length; i++) {
            if(!samsungData.values[i][0] ||
                !samsungData.values[i][1] ||
                !samsungData.values[i][2]) {
                continue;
            }
            else {
                var oldUrl = samsungData.values[i][2].match(/\/d\/(.+)\//)[1];
                console.log(oldUrl);
                var newUrl = "https://drive.google.com/uc?id=" + oldUrl;

                samsungList.push(
                    {
                        name: samsungData.values[i][0],
                        desc: samsungData.values[i][1],
                        image: newUrl
                    }
                );
            }
        }
        // 3
        var ipadData = await getiPadSheetValues();
        for (let i = 0; i < ipadData.values.length; i++) {
            if(!ipadData.values[i][0] ||
                !ipadData.values[i][1] ||
                !ipadData.values[i][2]) {
                continue;
            }
            else {
                var oldUrl = ipadData.values[i][2].match(/\/d\/(.+)\//)[1];
                console.log(oldUrl);
                var newUrl = "https://drive.google.com/uc?id=" + oldUrl;

                ipadList.push(
                    {
                        name: ipadData.values[i][0],
                        desc: ipadData.values[i][1],
                        image: newUrl
                    }
                );
            }
        }
        // 4
        var samsungTabletData = await getSamsungTabletSheetValues();
        for (let i = 0; i < samsungTabletData.values.length; i++) {
            if(!samsungTabletData.values[i][0] ||
                !samsungTabletData.values[i][1] ||
                !samsungTabletData.values[i][2]) {
                continue;
            }
            else {
                var oldUrl = samsungTabletData.values[i][2].match(/\/d\/(.+)\//)[1];
                console.log(oldUrl);
                var newUrl = "https://drive.google.com/uc?id=" + oldUrl;

                otherTabList.push(
                    {
                        name: samsungTabletData.values[i][0],
                        desc: samsungTabletData.values[i][1],
                        image: newUrl
                    }
                );
            }
        }
        // 5
        var uncommonModelData = await getUncommonModelSheetValues();
        for (let i = 0; i < uncommonModelData.values.length; i++) {
            if(!uncommonModelData.values[i][0] ||
                !uncommonModelData.values[i][1] ||
                !uncommonModelData.values[i][2]) {
                continue;
            }
            else {
                var oldUrl = uncommonModelData.values[i][2].match(/\/d\/(.+)\//)[1];
                console.log(oldUrl);
                var newUrl = "https://drive.google.com/uc?id=" + oldUrl;

                otherPhoneList.push(
                    {
                        name: uncommonModelData.values[i][0],
                        desc: uncommonModelData.values[i][1],
                        image: newUrl
                    }
                );
            }
        }
        // 6
        var accessoriesData = await getAccessoriesSheetValues();
        for (let i = 0; i < accessoriesData.values.length; i++) {
            if(!accessoriesData.values[i][0] ||
                !accessoriesData.values[i][1] ||
                !accessoriesData.values[i][2]) {
                continue;
            }
            else {
                var oldUrl = accessoriesData.values[i][2].match(/\/d\/(.+)\//)[1];
                console.log(oldUrl);
                var newUrl = "https://drive.google.com/uc?id=" + oldUrl;

                caseList.push(
                    {
                        // ******** 注意這裡是price,不是desc ************
                        name: accessoriesData.values[i][0],
                        price: accessoriesData.values[i][1],
                        image: newUrl
                    }
                );
            }
        }

        //day1 多选题题库(day1默认包含所有iPhone型号，即iphoneList的内容)； 可加入型号
        //day1: 先问完Samsung再问iPhone型号
        day1List = samsungList;
        day1bList = iphoneList;
        //day2 默认为ipad题库
        day2List = ipadList;
        //day3 多选题题库；可加入产品
        // day3List = new this.Array(case77, case78, case79, case80, case83, case85, case88, case89, case90,
        // case94, carcharger1, carcharger2, airpodcover1, airpodcover2, watchband1, watchband2, watchband3);
        //顯示首頁
        initializeDisplay();
        //call 题目生成函数
        caseQuestionGen();
        phoneQuestionGen();
        ipadQuestionGen();
        samsungQuestionGen();
        otherPhoneQuestionGen();
        samsungTabQuestionGen();
        day1Gen();
        day1bGen();
        day2Gen();
        day3Gen();
        //在網頁中顯示整個題庫
        initializeDatabase();

        //点击多选题页面的continue按键时触发的函数，索引id要与生成时的匹配
        var totalday1QueNum = day1QuestionList.length; //题目数量，用于核对此题是否是最后一题并告诉用户现在做的是第几题
        $("#day1Mul_question_num").html(day1I + "/" + totalday1QueNum);
        $("#day1Question").html(day1QuestionList[0]); //初始题目
            day1QuestionList.splice(0,1); //将初始题目从列表中删除
        $(document).on('click','#day1Continue',function(){ 
            if(day1I < totalday1QueNum){ //不是最后一题：
                $("#day1Question").html(day1QuestionList[0]); //那么我们从列表抛出一题来显示
                day1QuestionList.splice(0,1); //把刚刚抛出的题删掉
                day1I++;
                $("#day1Mul_question_num").html(day1I + "/" + totalday1QueNum); 
            }
            else{ //是最后一题，那么我们显示分数
                $("#day1Question").html("<h2>Your score for 'Day 1 multiple choices question (popular models)' test is " + day1MultiScore + "/" + totalday1QueNum + "</h2>");
            }     
        });

        var totalday2QueNum = day2QuestionList.length;
        $("#day2Mul_question_num").html(day2I + "/" + totalday2QueNum);
        $("#day2Question").html(day2QuestionList[0]);
            day2QuestionList.splice(0,1);
        $(document).on('click','#day2Continue',function(){
            if(day2I < totalday2QueNum){
                $("#day2Question").html(day2QuestionList[0]);
                day2QuestionList.splice(0,1);
                day2I++;
                $("#day2Mul_question_num").html(day2I + "/" + totalday2QueNum);
            }
            else{
                $("#day2Question").html("<h2>Your score for 'Day 2 multiple choices question (iPad models)' test is " + day2MultiScore + "/" + totalday2QueNum + "</h2>");
            }     
        });
    
        var totalday3QueNum = day3QuestionList.length;
        $("#day3Mul_question_num").html(day3I + "/" + totalday3QueNum);
        $("#day3Question").html(day3QuestionList[0]);
            day3QuestionList.splice(0,1);
        $(document).on('click','#day3Continue',function(){
            if(day3I < totalday3QueNum){
                $("#day3Question").html(day3QuestionList[0]);
                day3QuestionList.splice(0,1);
                day3I++;
                $("#day3Mul_question_num").html(day3I + "/" + totalday3QueNum);
            }
            else{
                $("#day3Question").html("<h2>Your score for 'Day 3 multiple choices question (Accessaries)' test is " + day3MultiScore + "/" + totalday3QueNum + "</h2>");
            }     
        });
    
        var totalCaseQueNum = caseQuestionList.length;
        $("#case_question_num").html(caseI + "/" + totalCaseQueNum);
        $("#caseQuestion").html(caseQuestionList[0]);
            caseQuestionList.splice(0,1);
        $(document).on('click','#caseContinue',function(){
            if(caseI < totalCaseQueNum){
                $("#caseQuestion").html(caseQuestionList[0]);
                caseQuestionList.splice(0,1);
                caseI++;
                $("#case_question_num").html(caseI + "/" + totalCaseQueNum);
            }
            else{
                $("#caseQuestion").html("<h2>Your score for '(Mixed) case and accessaries test' is " + caseScore + "/" + totalCaseQueNum + "</h2>");
            }
            
        });
    
        var totalModelQueNum = phoneQuestionList.length;
        $("#model_question_num").html(modelI + "/" + totalModelQueNum);
        $("#phoneQuestion").html(phoneQuestionList[0]);
            phoneQuestionList.splice(0,1);
            $(document).on('click','#modelContinue',function(){
            if(modelI < totalModelQueNum){
                $("#phoneQuestion").html(phoneQuestionList[0]);
                phoneQuestionList.splice(0,1);
                modelI++;
                $("#model_question_num").html(modelI + "/" + totalModelQueNum);
            }
            else{
                $("#phoneQuestion").html("<h2>Your score for '(Mixed) model test' is " + phoneScore + "/" + totalModelQueNum + "</h2>");
            }
        });
        
        var totalStabQueNum = stabQuestionList.length;
        $("#stab_question_num").html(stabI + "/" + totalStabQueNum);
        $("#stabQuestion").html(stabQuestionList[0]);
            stabQuestionList.splice(0,1);
            $(document).on('click','#stabContinue',function(){
            if(stabI < totalStabQueNum){
                $("#stabQuestion").html(stabQuestionList[0]);
                stabQuestionList.splice(0,1);
                stabI++;
                $("#stab_question_num").html(stabI + "/" + totalStabQueNum);
            }
            else{
                $("#stabQuestion").html("<h2>Your score for 'Samsung tablet test' is " + stabScore + "/" + totalStabQueNum + "</h2>");
            }
        });
    }
    
    main();
}