<script setup>
import { useTemplateRef, onMounted, defineProps, defineEmits, watch } from "vue";
import { initAudio, changeTrack, doPlay, doPause } from "./audio.vue"

const props = defineProps(['isPlaying'])
const emit = defineEmits(['changeTrack'])
const sectionRefs = Array.from({ length: 10 }, (_, k) => useTemplateRef(`section-${k}`));

// this logic looks backwards but it doesn't work the other way. maybe the value is a render behind? idk
watch(() => props.isPlaying, (isPlaying) => { isPlaying ? doPlay() : doPause() })
let observer = null;

function initObservers() {
      observer = new IntersectionObserver(handleIntersect, {
            root: null,
            threshold: 0,
      });

      sectionRefs.forEach(r => {
            if (r.value) observer.observe(r.value);
      });
}

function handleIntersect(entries) {
      console.log('got intersect')
      entries.forEach(entry => {
            if (entry.isIntersecting) {
                  const index = sectionRefs.findIndex(r => r.value === entry.target);
                  console.log('is intersecting', index)
                  changeTrack(index);
            }
      });
}

onMounted(() => {
      setTimeout(() => {
            initAudio(true, (newTrack) => emit('changeTrack', newTrack));
            initObservers();
      }, 10)
});
</script>

<template>

      <br />&nbsp;<br />&nbsp;<br />
      Oh there your name I's wrote, my dear,<br />
      Believe me what I say,<br />
      You are the one I love the best<br />
      Until my dying day.
      <br />&nbsp;<br /><br />&nbsp;<br />
      <img src="/images/1.jpg" />
      <br />&nbsp;<br />
      <span ref="section-0"></span>
      <p>The idling of a large diesel engine cut through the stillness of the early morning with deep irregular
            spasms. “Who the hell is there?” Lewis wondered as he got out of bed and walked over to the large
            twelve paned window on the other side of the bedroom. Parked out front of the building was a small
            black truck, an old Ford or something, with a big wooden plank flatbed. A man in a woolen trench coat
            and wide brimmed hat stood with one foot up on the running board smoking a cigarette, leaning against
            his left thigh.</p>
      <p>Short, muffled shrieks could be heard, coming from some place just out of sight. Lewis and the stranger
            both craned their necks to see two men dressed in similar uniforms dragging a young pregnant woman by
            her armpits, holding the bottom half of her arms against her back as her bare toes kicked against the
            cold ground. She was a small woman, dressed in a long coat and with only one shoe on her foot, yet the
            men visibly struggled to control her as they loaded her onto the back of the truck.</p>
      <p>Lewis stared at the scene, horrified, and in the periphery a baby began to cry. He watched the young
            child dressed in clothing made from an old flour sack crawl towards the truck, and as one of the men
            started towards the child, the other two locked eyes with Lewis. That was when he felt his eyeballs
            roll back into his head, straining the muscles deep within their sockets, and began to feel the tug of
            reality tear him away from this place, pulling him back into the temporary emptiness of his vision.
      </p>
      <p>Lewis jerked awake, taking a moment to realize that he was half in and half out of his covers, with his
            girlfriend Holly and their cat Bernie still sleeping peacefully next to him. He took a minute to catch
            his breath and chug some water that sat on the floor next to their bed, still unnerved by the leftover
            bits of dreamtime occupying his consciousness. He always had nightmares before he did a run.</p>
      <p>He grabbed in the dark for his shirt and pants, taking care not to wake his bedmates. The weather was
            warm for mid-November, and his bare feet tingled slightly on the cool kitchen floor as his blood began
            to make its way to his extremities. He poured hot water from the electric kettle over the contents of
            two small aluminum- colored packets of instant coffee substitute and grabbed a protein bar for the
            road, the new kind they were handing out at the relief office downtown.</p>
      <p>By the time he got his boots on, the sky had just started to glow with a soft pink hue, the sun peeking
            ever so slightly on the horizon. Out back under the covered porch sat the small electric tricycle and
            cart he had loaded the night before. This time it was mostly shelf stable food items: beans, instant
            potatoes, some cans of tomatoes and processed soy loaf. There were also two five-gallon gas canisters
            with homemade alcohol, water filters, some new reflector panels for a solar oven, and of course, one
            flat tan envelope of cash for the exchange tucked securely underneath the cargo. <span
                  ref="section-1"></span>He had tied them all down and put the tarp over top the night before,
            just like he always did, and took a moment to check over his work one last time, sipping the piping
            hot liquid from his thermos and taking a long pull off his vape as the trike’s battery fans whirred in
            harmony.</p>
      <img src="/images/2.jpg" />
      <p>It was the first six miles on the state road that always made him the most nervous. The only time he ever
            got caught by the police they hit him so hard in the stomach he almost passed out. They took the weed
            with them too. It was worth way more than whatever they got paid trying to take his ass downtown to a
            holding cell, which he was pretty sure didn’t have room for him anyway. Today, however, he made it out
            of the wide river valley and into the mountain hollows with no problem, only passing one other soul on
            the road, an old truck with an even older man behind the wheel, who stared straight ahead, only
            acknowledging Lewis with a single finger wave from his steering wheel.</p>
      <p>The sun was fully risen by the time Lewis hit the gravel road above the hollow, though the shape of the
            hillsides obscured the morning light in uneven ways. Before its sale, all these roads were access
            points to the National Park, and even before that they were maintained as the wagon routes that ox and
            mule teams carried goods of all imaginable variety up and down the Old Blue Ridge Turnpike. Lewis
            slowly climbed the steep hillside, taking another moment to break at the top of Finks Hollow before
            walking his rig around the steel swinging gate and the large sign reading “Posted, Private Property,
            Deadly Force Is Authorized Beyond This Point.” Then he quietly passed into the backcountry.</p>
      <p>This section of road was especially rough, never having been modernized, and Lewis had to take his time
            navigating around the large stones scattered across his path as the trike slowly crawled up the
            mountain. Lewis and Holly had spent countless afternoons exploring these olds neighborhoods over the
            years, occasionally coming across a stray stone foundation, or a creeping vine of English ivy among
            the wildwood, remnants of its prior homeliness. A few rotting fence posts with loose hanging wire,
            dangling in the morning breeze, were mostly all that remained now.</p>
      <p>During the worst days of the Bird Flu, after his parents died and the shortages began, Lewis rode up into
            Dark Hollow late one evening, his mind racing to terrible places. He ran through the woods until he
            found a large grove of Mountain Laurel and cried all night under its quiet canopy, collapsing on the
            dry bed of leaves beneath him, eventually returning home around noon the next day. Holly cried out
            loud as she beat on his arms and chest with her fists. He knew she felt it too. Everyone did, even if
            they pretended not to.</p>
      <p>Lewis stopped his trike to take another break at the junction of Dark Hollow and the fire road, killing
            off the last of his thermos of sub and eating the protein bar. A lot of people complained about them,
            probably because they didn’t taste like much, but Lewis actually enjoyed the chalky oat sized flakes
            embedded throughout the small bar. Somewhere a few hundred feet away he heard the rapid knocking of a
            woodpecker on a dead tree, sounding huge in its hollowness, and after he packed away the last bits of
            trash from his breakfast, Lewis engaged the trikes throttle and turned left onto the fire road.</p>
      <p>This section of road was better maintained, and Lewis could see fresh tire tracks clearly embedded in the
            hard dried mud. He’d never seen anyone riding along here but knew it to be the main road that went
            from the bottom of mountain up towards Skyline Drive. About a year after the flu started is when they
            sold it all, though no one knew exactly who the buyer was, or how much they acquired the entire
            property. The government didn’t disclose any of that information anymore. Everyone who lived around
            there knew about the different people who were moving up into the park though, years before it ever
            got sold. They were all kinds of people, from all over. Lewis and Holly saw them walking down the road
            in front of their building, sometimes pulling a chain of carts, and sometimes with only the clothes on
            their back.</p>
      <p>Some people couldn’t pay their debts and took their whole families up there. Others just thought they
            might have a better chance in the camps. It was the hurricane that really changed things, the one that
            made a direct hit to the Chesapeake. That’s when the numbers of travelers started to go up around
            there. No one knows how many perished in the twenty-foot storm surge, and even the ones who had the
            money to evacuate beforehand lost everything they owned overnight. There was never any official
            warning. After the national weather service was disbanded no one ever knew what was about to blow in.
            It was the same thing with the two big wildfires in the Valley. When you lose everything you’ve got,
            you just need someplace to go.</p>
      <p>It was easy for Lewis to find the drop location. He had the road memorized at this point. It was four
            switchback turns and then after about a quarter of a mile the road straightened out. There on the
            right, about chest high on the side of a huge Beech tree, was a notched marking resembling a bear’s
            claw marks. Lewis didn’t ever communicate with anyone, just pulled his trike off the road, hid it
            behind some brush, and unloaded his cargo to the big old, rusted toolbox—the kind that sits in the
            back of a truck bed—hidden between two large boulders just above the river. Someone Mr. G knew had to
            be the contact, but Lewis didn’t really know who it was for sure. Mr. G was the man moving the product
            though, he knew that. It was one of the only ways these people could make any money up here.</p>
      <p>The nationwide prohibition hadn’t stopped growers from developing an auto seed that went to harvest in
            two months, sometimes less. That, and the longer growing season in recent years made it a potent cash
            crop for anyone brave enough to cultivate it. On this day there were two large hiking backpacks lined
            with black trash bags waiting for Lewis, absolutely packed to the top with loose weedy leaves and
            dense buds. He secured all of his delivery inside the toolbox then put one pack on his back, one pack
            on his front, and climbed out of the dry riverbed back up to his trike, always taking the extra step
            to gather sticks and small logs and pile them on top of his load, just in case. Today Lewis took his
            time, savoring the cool breeze coming down off the steep hillsides, and after taking a couple long
            pulls off his vape, slowly headed back down the mountain.</p>
      <img src="/images/3.jpg" />
      <p>There wasn’t another vehicle on the road the whole ride home, and Lewis was able to make it back by
            around 12:30 to have some lunch with Holly. She was on four days a week with the call center. Even
            after the bosses tried to replace them all with computer models the top brass still preferred a human
            connection, though they were treated no better than their artificial colleagues. The couple enjoyed
            some leftover beans from the night before and then later in the afternoon Lewis rode over to Mr. G’s,
            who was only a couple miles outside of the small downtown area, right off the main road near the
            highway.</p>
      <p>Lewis took off the wood scraps he was packing and deposited them in two large bins on the porch, then
            placed the two hiking packs in the small metal shed to the right of the house. He knocked five times
            on the side door, hard, and could hear a shuffling sound over a softly syncopated bass groove. “Who is
            it?” said a phlegmy voice behind the frosted glass. “It’s Lewis, G, just dropping off.”</p>
      <p>Mr. G fiddled with the latch to the door and appeared on the other side with his shirt off. The skinny
            old man grinned, his face silhouetted by the big blue anti- viral UVC light mounted on the wall behind
            him, and motioned with his hand with squinting eyes under a new flat brim hat, clearing his throat
            loudly. “Come on in Lewis, I was just about to get my head on straight.” Mr. G’s muscle, Big T, sat
            behind him in a chair by the table, his arms crossed against his chest, and nodded as Lewis entered
            the room. Lewis wasn’t exactly sure how old Mr. G was, but he had to have been pushing 80 at this
            point. His upper body was riddled with blemishes and spots, and he had taken on the gauntness of an
            older man, especially in the last couple of years.</p>
      <p>Mr. G had a way of speaking similar to any of the good old boys from around there and ran in some of
            those circles his whole life. His disposition was kinder, however, and Lewis knew him to be a deep
            feeling and open-minded man, even sharing a girlfriend with Big T. At some point in the early 2000s
            Mr. G had a health scare, no doubt related to his drinking habits at the time, after which he switched
            almost solely to “reefer,” which eventually became not only his retirement plan, but also his life
            force.</p>
      <p>Lewis sat on the uncomfortable painted wooden bench across from the long black couch that Mr. G was
            settling into. “How about a gravity bong, Lew?” Mr. G packed a metal bowl atop a plastic jug with weed
            and pulled it upwards, filling the canister with thick white smoke, then cleared the chamber in one
            deep breath while hacking up his lungs in a terrible fit. He packed another one for Lewis.</p>
      <p>“That’s the Jamdawg 91, lemme know what you think.” Lewis took a hit and watched the smoke fill the top
            of the room in billowing waves against the canned ceiling lights.</p>
      <p>“Lewis did I tell you what I saw the other day out front here?” Lewis shook his head; this shit was
            strong as hell. “I was out front with my brother the other day, we were planting some fuckin plants in
            front of the house here, and this big jet plane came flying in from the northeast. That motherfucker
            flew right over us then came to a dead stop in the air over that field across the street. Now I ain’t
            kiddin ya buddy, that motherfucker stopped, turned 45 degrees towards the southeast, and shot off like
            a motherfuckin bullet. I never seen anything like it before in my life.”</p>
      <p>Lewis only caught about half of that, he was stuck on his way coming down the mountain. Mr. G waited for
            a response. “You alright there Lew?” and leaned towards him with a concerned look in his eye. “Yeah,
            I’m fine G, I just didn’t sleep well last night, had some bad dreams.” Mr. G looked at Lewis square in
            the eye, taking a moment to let the silence settle. “Let me tell you something Lewis . . . Even the
            worm turns. You remember that.” Lewis fell deeper into his chair as the two sat quietly for a few
            minutes listening to the looping groove play over the TV speakers next to them, the stillness of the
            moment only being interrupted by Mr. G packing another bowl and hacking up great quantities of smoke.
      </p>
      <p>Big T walked over and sat in the chair next to Lewis while browsing different pages on his phone. He lit
            a cigarette and leaned over to show Lewis where they were all about to go for the weekend. Some place
            down by the Bay. Lewis stared at the pictures scrolling across the small screen. “Looks nice T, I hope
            y’all have a good time down there.” A phone suddenly began to ring somewhere within the cushions of
            the couch and Mr. G mumbled under his breath trying to locate it. “Hello,” he said gruffly into the
            receiver . . . “No, give me half an hour, forty-five tops, I’ll get T to give me a ride down there . .
            . no, now is fine, thank you. Alright, bye bye.” Mr. G squinted at his phone and ended the call with a
            wavering finger. “Lewis, I apologize, there is something I have to attend to down at the restaurant.
            Let’s get you taken care of real quick.”</p>
      <p>Lewis followed Mr. G into his bedroom where Mr. G took out a large vacuum-sealed bag of marijuana and
            five hundred dollars cash folded inside a new plastic sandwich bag from the open safe sitting on the
            floor. “Thanks for stopping by Lewis,” Mr. G said, patting him on the back. “I’m sorry I’ve got to
            run, why don’t you and Holly come by sometime next week for a few cocktails.” Lewis put the stuff in
            the little bag he had slung over his right shoulder and stepped towards the side door. “That’d be
            great G, thanks.” Mr. G always walked him out. “Oh, and Lewis, I heard from my buddy Mac down in
            Greenville this morning. They’re getting some nasty shit, already tore through there and his man with
            the radar said it’s headed north. You might want to keep an eye on that.”</p>
      <p>Lewis grabbed the door handle and stepped out into the bright light of the day. “Thanks G, I will.” He
            gave Big T a wave goodbye and wished them a nice trip as he walked towards his trike. He didn’t
            realize how high he was until he hit the road. The black lines from the bare trees lining the roadside
            flickered in patterns as he rode past, blurring near the bottom of his field of vision, casting black
            and golden shadows against the backs of his eyelids. That night Lewis and Holly cuddled in bed
            watching old TV shows until late into the night while Bernie slept nearby on the cool wood floor.</p>
      <img src="/images/4.jpg" />
      <p>The next day passed in a routine monotony. Lewis worked at clearing their garden rows of summer plants so
            bugs wouldn’t hide in the litter and overwinter. He walked down each row, pulling up the dried stalks
            of dead plants and removing the new growth that shot off those that continued to thrive in the warm
            November sun. The freeze just never came like it used to, and so stayed the thousands of bug eggs,
            ready to hatch at the first sign of the last frost, which could now reliably be observed around the
            end of February.</p>
      <p>That night he went over to Warren’s trailer, just across the field. Warren had been a neighbor down the
            street from Lewis and Holly until his wife died and he had to sell off their building. Their landlord
            didn’t charge Warren to park his trailer out there in the field, they knew each other from way back
            anyway. It was apparent that he had some lasting neurological problems from the virus and Lewis tried
            to keep an eye on him when he could.</p>
      <p>The sun was almost fully down when Lewis arrived. He offered one of his beers but Warren declined and
            broke out the hard stuff, and the two of them got well into their night. “G told me some storm is
            tearing through South Carolina right now . . .” Warren said nothing. “Remember what happened last year
            down in Lynchburg . . .” Warren rocked back and forth in his chair. “Why do you listen to that old
            man, Lewis, he doesn’t know where he is half the time anyway. The last storm like that we had like
            that was before you moved here . . . 95 . . . that was a ‘one in one-thousand-year event’ . . . ain’t
            gonna happen.” Lewis sipped from his beer silently as sirens from two police cruisers sped past them,
            distorting light and sound as they moved through the tight mountain valleys.</p>
      <p>The next morning Lewis woke with the slightest tinge of a hangover to hear Holly already out of bed and
            moving around the kitchen. She came into the bedroom, “Hey I thought I heard you get up . . . the
            water’s doing that thing again, do you mind?” Lewis didn’t say anything and gave her a kiss on the
            forehead then got his pants on. He walked out back to the well room and immediately saw the problem.
            Thick clumps of reddish mud and clay were caked into the folds of their water filtration system. <span
                  ref="section-2"></span>This had been happening more and more lately as their pump sucked from
            the bottom of their well. It was feast or famine with rain these days, and even a steady inundation of
            four or five inches didn’t seem to recharge their system like it used to.</p>
      <p>Lewis blasted the muck off of the filter with rainwater from their 550-gallon black plastic cistern with
            the help of a small pressurizing attachment that fit on the end of a drill. That’s when he noticed the
            color of the sky. It was a steady gray dappled with a lighter colored blanket of fast-moving white
            clouds underneath. The air was pleasant and almost felt like the beach when the wind picked up. Warm
            and packed with moisture.</p>
      <p>By midday steady bands of wind and rain had begun to move in, coming in shorter and shorter intervals,
            and as the afternoon wore on Lewis and Holly went to work covering their plants from the impending
            storm. They stretched the different pieces of dirty canvas drop cloth and blue plastic tarps up and
            over the large hoops above their heads, securing them into the ground with heavy metal spikes and a
            mallet, and then headed inside to make some dinner.</p>
      <p>The canned soy loaf had become a dinner staple for the two of them in recent years. It fried up pretty
            good and didn’t taste altogether too bad straight out of the can either. Holly cut up some vegetables
            from their garden while listening to the news report coming out of the small radio on top of their
            fridge. “Peace negotiations continue to stall as . . .” Lewis scanned the FM stations, past the gospel
            music and looping traffic report for the surrounding zones, finally turning it off to reveal the rain
            falling steadily on the metal roof above their heads. Tonight they simmered half a can of soy loaf
            along with some turnips from the fridge, slowly cooking it down into a thick comforting stew.</p>
      <p>“We really needed this rain . . .” said Holly, slowly chewing her food. “Yeah, we did” replied Lewis,
            staring out the window nearest to him. A huge clap of thunder roared through their home as the sky
            outside the window flashed with lightning, and both felt the percussion deep within their bodies.
            “Damn that was a close one!” said Lewis, sitting back into his chair. Bernie came running over to hide
            under the stairs as the thunder rolled nearer, just like he always did during a storm. “There he goes
            . . .” Lewis said laughing, stretching his neck to see Bernie’s tail wagging, just barely hanging out
            of the gap underneath of the stairs. “That’s a good boy Bernie,” “Good boy,” they both said, as they
            sat listening to the wind and rain blowing hard against their building, over the rolling hills to the
            southwest, and into their neighborhood along the river bottom.</p>
      <p>The weather had really picked up by the time Lewis was finished with washing the dishes. The storm was
            now moving in heavier undulating waves and was already starting to flood their side yard by the look
            of it. Lewis ran outside to find the dark water pooling all the way from the gravel road into their
            covered shed out back. He popped his head back in the front door, yelling up to Holly for some help,
            and the two of them got to work trying to remove the debris blocking the flow of water in the ditch
            with a garden hoe and rake. The wind, now ripping down the river valley, had also torn off half of
            their tarps covering the garden, and was cracking them like a whip in the rapidly changing gusts.</p>
      <p>Lewis saw that the water was beginning to drain a little bit and yelled back towards Holly, “I’m going to
            go check on Warren!” Holly gave him a thumbs up and Lewis took off across the field, splashing cold
            water onto his pants above his rubber boots while a hard rain hit his face from seemingly every
            direction. The light was still on.</p>
      <p>He pounded on the door to the trailer, trying to scream through the sound of the storm, “Warren, Warren
            are you in there?” He knew he was. Sure enough, Warren was passed out on the bunk towards the back,
            the bottle still open beside him. Lewis tried to shake him awake but it was useless. He was out cold.
            The rain was now coming down too hard for Holly to make any progress with the flooding. They’d just
            have to deal with the consequences later. When Lewis returned to the covered shed the two put up their
            tools up and ran inside to watch from out of their bedroom windows.</p>
      <p>Steady sheets of rain began to lash the sides of their building while the couple stood looking over the
            dark fields and flat river bottom, their view occasionally obstructed by small waterfalls coming from
            the failing gutters above them, too loaded with runoff to function properly. They both saw it when the
            lightning flashed. The river was up past the bank, slowly lapping at either side, and spilling into
            the large agricultural fields, forming small movable pools. Lewis’s stomach dropped in anxious knots.
      </p>
      <p>“I’m going to get the bags ready,” he said as he ran downstairs. They had been through this before,
            several times in fact, once even loading up the car just in case. According to their neighbors, the
            flooding in 1995 had washed out the area</p>
      <p>beneath their building, but the water had only ever made its way into the state road once in the ten
            years they’d lived out there.</p>
      <p>Lewis flicked on the hall light and grabbed for the knob to open the closet door. He tore through the
            first layer of junk by throwing some winter jackets and a heavy quilted blanket into the hall,
            revealing a neat stack of three backpacks. One was just full of clothes, old stuff they didn’t wear a
            lot, some toiletries, emergency battery chargers, a first aid kit, and a grocery bag full of
            lightweight freeze-dried food. The next bag contained the tent, a small tarp to go underneath it, a
            larger tarp for a little more weather proofing if needed, and two inflatable camping mats. The third
            bag was their bedding. Two sleeping bags, two small pillows, and a wool blanket that was older than
            Lewis. There was also a small bag with waterproof matches, knives, some rope, a collapsible hatchet,
            and some other emergency camping supplies.</p>
      <p>Lewis tossed them by the front door just as the power began to flicker in and out. Digging deeper now, he
            grabbed for Bernie’s cheap plastic pet carrier, and once in hand rushed upstairs, scuffing the walls
            with its hard edges.</p>
      <p>It wasn’t long after that the power went out. The lights dimmed, three or four times, stuttering at
            various frequencies, then died with one strong surge of electricity, cutting to a deep black. The
            lightning had accelerated to a terrifying pace, strobing every few seconds, with long reaching cracks
            of electric white light that lingered in the air for long periods of time. Holly and Lewis could
            clearly see the flood water steadily advancing with every flash of light. It was hard to tell how much
            time was passing, but the new edges of the river were now deep enough to carry small floating debris.
            Lewis put on his jacket and ran downstairs, making one final effort to wake Warren from his sleep.</p>
      <p>The water was now pooling in the sections well past his ankles as he ran across the open field. Lewis
            threw open the flimsy plastic door to the trailer in a rush, feeling it bend under the weight of the
            windstorm as he tried to close it behind him. “Wake the fuck up Warren!” He screamed, trying to shake
            him alive. “Warren, the water is right across the street, come on man!” It was no use; Warren was too
            heavy to carry and too drunk to wake up. Lewis made sure his door was latched securely before he ran
            back over to the house.</p>
      <img src="/images/5.jpg" />
      <p>Their plan had always been the same, and both knew what to do if the big one hit. They would grab the
            bags, put Bernie in his carrier, and if they could, drive Hollys little car up the hill to the
            abandoned construction site on the ridge behind their building. If the road was too bad, they’d have
            to walk it.</p>
      <p>The couple struggled to control their emotions as the floodwater rose nearer and nearer to their home.
            “What the fuck are we going to do?! . . .” “I don’t know.” “Look at it, it’s already in the road, it’s
            not going to stop, it’s raining so fucking hard . . .” “OK, OK, I know!” “What do you want me to do?!”
            “Get Bernie!”</p>
      <p>Holly found Bernie hiding under the stairs, terrified by the energy around him, and had to coax him out
            with a bag of treats, which even under the most miserable of circumstances he could not deny. “Good
            boy . . . Good boy Bernie,” Holly said as she patted his hind quarters, slowly shoving him into
            carrier. They made the call to leave right as the water was about to hit the porch. It only took a
            minute. They put on their rain gear and head lamps and left through the back door.</p>
      <p>Lewis and Holly headed down the gravel road towards the hill behind their building with Bernie slipping
            around in his carrier, yowling wildly in his disorientation and discomfort. Lewis looked back just in
            time to catch the moving black mass of water starting to rush under Holly’s car. When they neared the
            bend in the gravel road that led up the hillside, a deep confusion washed over them.</p>
      <p>Neither of them had heard the landslides.</p>
      <p>The gravel road was completely washed away, leaving only a tangled mess of trees, brush, and clumping
            mounds of earth totally blocking their only way up. Lewis yelled back towards Holly, “We’re going to
            have to find a way through the woods, it’ll be ok, come on, we’ve got to go!” They slipped their way
            up the steep hill, constantly catching themselves falling on the slick leaves and rushing water. Just
            ahead, near what used to be the road up, stood a huge Tulip Poplar that Lewis knew had rotted out on
            the inside, and with one great burst of energy, the three of them found their way inside the massive
            tree.</p>
      <p>Lewis and Holly took a moment to catch their breath, squeezing each other’s hands against their bodies as
            the hollow walls of the poplar tree swayed side to side in the fierce winds. “It’s not too much
            farther, most of the road up there looks like it’s still there too.” Holly had her arm around him, “I
            don’t care, let’s just get up there.” They grabbed for Bernie in the darkness and took off towards the
            top of the ridge in a push of desperation. The water rushed down past their ankles, running through
            deep freshly carved ruts, zig zagging underneath them, skating across the parts of the gravel road
            that remained intact.</p>
      <p>They felt an incredible sense of relief upon finally rounding the top of the hill to find the remnants of
            the construction site still standing in the fury of the storm all around them. They ran across the
            thick mud surrounding the unfinished building and then on to the dry concrete pad through an open
            doorway.</p>
      <p>Lewis grabbed the bags and quickly threw them into the driest corner of the room while Holly tried to
            comfort Bernie, who was still loudly crying in his carrier. The wind screamed in patterns they had
            never known before, slamming a loose piece of metal flashing repeatedly against the side of the house
            in irregular intervals, and howling in the moonless night. There were loud cracking sounds of hardwood
            trees splintering under the fluctuating pressure, as well as the brushy thud of mature trees being
            felled by the failing waterlogged earth around their root systems.</p>
      <p>The couple stayed awake all night, through the eye of the storm, as well the consecutive waves of
            hurricane that followed. The sky at dawn was still too darkly clouded to see the sunrise, but finally,
            around eight o’clock, light started to peek through in spots, showing for the first time the
            devastation all around them. At least half of the trees along the ridge were gone, and the wind had
            plastered a thick layer of leaves against the eastern facing side of the house.</p>
      <p>Lewis got their little camp stove set up and boiled some water from one of their canteen bottles. The cup
            of sub warmed his hands, and when he went to hand Holly her own, Lewis realized she had closed her
            eyes and was sleeping against one of the bags in the corner of the tent. Bernie was out too.</p>
      <p>Lewis zipped the tents flap shut and stepped outside, and as he walked, he realized that his legs and
            hands were trembling. He stepped slowly over to the edge of the ridge where the property owners had
            once plotted a grand vista for their vacation rental property. It looked out over the whole river
            valley and towards the mountains, miles away. Lewis couldn’t believe his eyes. The river, which was
            usually a shallow stream trickling around some rocks, was now over a hundred feet wide. Actually, it
            was more than that. The closer Lewis looked, the clearer he saw the separate branches of swift current
            breaking around the hills and different low spots below him.</p>
      <p>Trees, hundreds of years old, bobbed up and down in the muddy water. Huge sheets of metal from barns and
            pieces of roofing, whole herds of livestock, even an intact house, all floated by as Lewis sipped from
            his cup.</p>
      <p>Holly was awake when Lewis returned to the tent. She was eating some of the dense cracker-like biscuits
            with peanut spread and feeding little bits to Bernie, who was now quietly purring in his carrier. “He
            made a mess Lewis,” something he could smell the closer he got to the two of them. “Alright, we’ll
            clean him up. I’m sorry little guy.” Lewis stroked a spot Bernie’s forehead through the metal cage
            door and felt the cat softly purring to himself.</p>
      <p>Lewis dampened an old rag he found at the construction site by dipping it in some standing water that had
            spilled on to the concrete floor and cleaned Bernie’s backside off as best they could. Both were
            surprised at how quicky Bernie adapted to his new environment, batting at the nylon strings dangling
            from the edges of the tent and then coming over to sleep sweetly in Holly’s lap.</p>
      <p>The couple then walked back over to the edge of the ridge just as the sun was really starting to come
            out. When Holly saw it, a soft guttural sound escaped from her throat. It appeared that most of the
            structures in the next community down the road had been totally washed away.</p>
      <p>They watched the muddy water for at least an hour, speculating about what might have survived the
            torrent. A shingled roof completely detached from its base floated freely down the wide water, slowly
            turning clockwise. Near where a metal stove pipe came out of the metal roof sat a man, leaning with
            his arms on his thighs, riding it like raft. The man saw Lewis and Holly as he passed and stood up to
            wave his hands at them for help. They watched helplessly as he floated beyond their line of sight and
            farther downriver.</p>
      <p>The following morning they saw two large black helicopters flying incredibly low to the water, only once,
            probably to survey the destruction with their instruments. They tried to get their attention, waving a
            big white pillowcase over Lewis’s head, but it was clear that they were not part of the mission. They
            had enough food to last them at least a week and a half, but it would have to be rationed and would
            not deliver the full number of calories either of them needed for a single day, let alone Bernie,
            though he seemed happy enough licking some leftover sauce from the bottom of the aluminum packages
            mixed with bits of crumbled crackers.</p>
      <span ref="section-3"></span>
      <p>They did not see or hear from another soul during the days and nights that followed. Just the chirp and
            cackle of the daytime birds, and the lonely call of the screech owl late at night. Holly hung a line
            between two trees to dry their clothes and tried her best to get their camp organized, and every
            evening Lewis walked around the construction site to poach pieces of wood and building materials to
            build a fire for the three of them to enjoy for a few hours, trying to take in as much warmth as they
            could before retiring to the thin walls of their tent.</p>
      <p>Bernie, being a house cat for most of his adult life, was quickly reminded of the wild dangers of the
            nighttime, and after hearing the nearby barking of a large fox, mostly took to a dark corner of the
            construction site during the evening hours. The wind sounded different now that most of the trees had
            fallen, giving a hollower atmosphere to the environment that Lewis was not accustomed to. As the warm
            air from the tropical system started to recede, cold winds began to move in. For the first time that
            year it felt like November.</p>
      <img src="/images/6.jpg" />
      <p>It was on the seventh day that the couple decided it would be safe enough to investigate the damage down
            at their home. The river was still running high, flooding into new irregular places along its newly
            formed banks, but the fields near their building looked to be mostly free of water, aside from the
            stray stagnant pool here and there.</p>
      <p>Lewis and Holly took the descent slowly, climbing over fallen logs and down the steep hillsides, until
            they finally arrived at the flat fields behind their building.</p>
      <p>Large boulders and thousands of river stones had been deposited throughout the newly formed landscape.
            One even looked to be bigger than the old tractor that used to sit by the side of the road, which was
            nowhere to be seen. Neither was Warren’s trailer. Everything was wiped away by the flooding, leaving a
            thick layer of silt and mud, with only wispy tops of the tall grass sticking out of the muck in little
            tufts.</p>
      <p>Lewis was shocked to see the bright vinyl siding of their building behind the dense screen of debris and
            thin line of trees ahead. The roof was next to come into clearer focus once they turned the corner
            near the old road, and much to their surprise, their building remained standing. The immense power of
            the water had torn through the lower level, blasting out all the windows and doors, turning the entire
            structure off its foundation, and giving it a slight tilt downward towards the right.</p>
      <p>Lewis and Holly stood motionless, ankle deep in the thick mud, their mouths open slightly, as they both
            attempted to take in the information their eyes were giving them. The slight change to the building’s
            position was almost harder to process than what they had just lived through for Lewis. It was a deep
            uncanny feeling that he refused to acknowledge at first.</p>
      <p>Holly couldn’t believe it either. It was as if the whole landscape had shifted to another time and place.
            All the fencing was gone, not a single post remained along the road, which itself was no longer
            passable. The incredible pressure of the water had found a way underneath the old blacktop and had
            ripped it to shreds. Huge pieces of the roadway were now scattered into the river, mixing into massive
            piles of trees and trash that were stuck firmly against the mangled bridge supports, just a little
            farther down the river from them.</p>
      <p>There was almost nothing left inside the first floor of their home. The water came in and washed away
            almost everything in their living room and closets. A bedsheet remained plastered against a broken
            door frame, now hanging mostly dry but caked in mud. Stuck against the walls were bits of paper, leaf
            litter, and garbage, with the high-water mark sitting just above Lewis’ head. It must have been close
            to twenty-seven feet above where the river normally sat, maybe more.</p>
      <p>They took the stairs to the second story of their apartment to find the entire kitchen and bedroom
            scattered across the floor. It looked like a bomb went off. All their pantry items, the refrigerator,
            and the hutch they stored their cups and plates in were in a terrible mess. By the looks of it, not
            much had remained upright when the building tipped off its foundation.</p>
      <p>A blinding stench was also immediately apparent upon entering the space. What little meat they had, as
            well as the frozen vegetables from their garden, sat openly rotting in their plastic bags. There were,
            however, many unspoiled items in their fridge, as well as a pile of cans they could sustain themselves
            on for at least for a couple of weeks. One large thirty-pound bag of dried cat food also survived the
            storm. It had spilled open when it dropped off the top of the refrigerator and Lewis packed away a
            nice amount in his pocket to take back up the hill for Bernie. The sweet potatoes and three
            fifteen-gallon water tanks that they kept under their bed were also intact. As was their mattress,
            which by some small miracle had remained dry throughout the ordeal.</p>
      <p>The two of them got to work quickly, throwing the rotting garbage into a large pile a couple hundred feet
            behind their building. They then collected all the food they could into laundry baskets, organizing
            the mess while sweeping up the broken glass and trash. The new angle of the floor would take some
            getting used to, which tripped them both up repeatedly, but they were grateful to have these few
            remaining comforts from before. Lewis left Holly to finish the first round of cleaning on her own
            while he hiked up and down the hill several times to grab Bernie and their bags.</p>
      <p>They slept that night in huge a pile of their clothing and scattered bedroom belongings in short anxious
            bursts of between their waking life and dreamtime, with Bernie purring in between them all night long.
      </p>
      <p>Sometime that next morning is when they both noticed the swelling and pain around their ankles. The mud
            they had been stomping around in was causing a serious rash and some minor skin flaking that was
            painful to the touch. Bernie seemed to be licking his paws more than usual as well, as he too had been
            exposed, climbing in and out of the old windows downstairs to relieve himself in the side yard.</p>
      <p>The couple took turns applying antibiotic ointment to their inflamed skin while the water heated beside
            them. They split a can of green beans for breakfast and washed it down with two packets of sub while
            Bernie ate from his bowl. “Do you think anyone else made it?” Holly asked, taking a swig of her
            drink.<span ref="section-4"></span> Lewis looked down at the ground. “I don’t know, it looks like all
            the buildings on the right side of the road are gone, but maybe some of the folks up on the hill did.”
            The couple chewed their food and agreed to survey the neighborhood and look for others after they ate.
      </p>
      <img src="/images/7.jpg" />
      <p>Lewis and Holly tied plastic grocery bags they found under the sink around their feet and legs and walked
            down towards the center of their village. Neither really expected to see quite the amount of
            devastation they did, with most of those buildings along the river now completely washed away, and
            what little was left was now covered in a thick layer of mud. The older homes higher up along the
            hillside above the river were severely damaged. Landslides coming off the ridge had taken huge chunks
            out of several of them, exposing open bedrooms, electrical wires, insulation, and other bisected
            pieces of home left hanging out of the gaping holes. Several had been buried or entirely collapsed in
            on themselves during the landslide.</p>
      <p>It was Holly who found the first body, a man who they had never really spoken to but knew lived in one of
            the houses just down the street from them. He was older and kept to himself. It looked like he had
            tried to drive through the flood waters but drowned when his truck flipped upside down.</p>
      <p>Holly got a whiff coming out of the cab and threw up her breakfast on the ground next to the battered
            vehicle in a pile of black liquid and partially digested green beans. They couldn’t find anyone else.
            All of their neighbors had been elderly people, and it was clear that everyone from that row of homes
            had been washed away or crushed to death. The only other houses they could see were on the other side
            of the river and it didn’t look much different than where they currently stood.</p>
      <p>The next day, about three o’clock, they heard someone coming down the roadway making a kind of soft
            hollering sound. “Hellooo, helllloooo. Can anyone hear me?” his words becoming clearer as the man
            approached their building. Holly stuck her head out the window to see who was there. It was an older
            gentleman who looked to be in his late 60s wearing a pair of dirty khakis, with one leg ripped from
            the knee down to the ankle cuff, and a soiled blue dress shirt on his top. The couple ran down to meet
            the man, who was clearly dehydrated and not making much sense when speaking to either of them.</p>
      <p>“I let her go to the store, she said she would be right back. Have you seen her? My wife . . . her name
            is Gwen. She said she would be right back. Oh . . . Let me . . .” The man broke down onto his knees in
            the cold mud along the road, crying into the palms of his hands. Lewis tried to guide the man towards
            the broken section of concrete stairs leading up to their porch while Holly prodded for any
            information she could get out of him. “Are you alright Sir? Where do you live?” Lewis handed a water
            bottle to the man, watching as his shaky grip spilled the liquid down either side of his chapped lips
            and onto his shirt. The man set the empty orange bottle on the edge of the stairs causing it to tumble
            into the mud as Holly sat down next to him.</p>
      <p>“Are you hungry Sir? We have some food if you’re hungry.” The man took in the information slowly, then
            looked up at Holly. “Yes . . . God bless you. Thank you, God bless you.” Lewis stayed with the man
            while Holly put together a small plastic grocery bag with some canned corn, several protein bars, and
            a little baggy of dried fruit and nuts.<span ref="section-5"></span> It wasn’t much but it might help
            him on his journey.</p>
      <p>The sun was going down now, and it was beginning to get dark outside. The man took the small sack from
            Holly and held it loosely in his right hand, dangling it just above the ground. “God bless you.” He
            repeated it to himself. “I have to go, please tell my wife, she’s in a white . . .” but his words
            became increasingly harder to piece together. “God bless you,” said the man, walking away from their
            building and towards the communities nearest to the mountains, and the two of them watched as the man
            hobbled over the rubble blocking his way until he was out of sight completely.</p>
      <p>Bernie was waiting patiently in the empty window frame downstairs. It was time for supper.</p>
      <p>Later that night Lewis found the old emergency radio wedged behind the base of the fridge and the wall.
            He scanned the stations three times, both AM and FM, and was shocked to find only the slight crackle
            of dead air.</p>
      <p>A week passed and there was still no sign of anyone. No emergency responders. No news broadcast on the
            radio. No helicopters, or even stray men coming down the old turnpike road. The silence was hard on
            Lewis and Holly, and no matter how hard they tried to fight through the fear and discomfort, the
            nagging feeling that possibly no one would be coming began to weigh on them.</p>
      <p>They both cried in bursts, sometimes together, and sometimes alone, out behind their building or in the
            woods. Sleep did not come easy on an empty stomach either, but the couple did their best to occupy
            their time with short walks around the neighborhood, collecting food and anything salvageable from the
            destroyed homes, and resting as much as possible.</p>
      <img src="/images/8.jpg" />
      <p>It was on the eighteenth day that they awoke to the heavy thumping of a helicopter. Lewis threw on his
            clothes and ran down the stairs, out the open doorway into the street. Hovering in the air near the
            old bridge site was a huge military helicopter, the kind with four horizontal blades. Dangling below
            it was the largest bulldozer that Lewis had ever seen. It looked to be almost twenty-five feet tall
            and was painted a slate grey color. Just above the massive scoop was a steel caged cab where the
            driver sat, and above that, a man dressed in fatigues carrying a long barrel rifle was climbing into
            the short crow’s nest on top.</p>
      <p>The helicopter set the machine down on their side of the river and almost immediately engaged, throwing a
            huge plume of black smoke out of its vertical exhaust. Lewis watched as it pushed the trees and rubble
            aside, only having to back up and reposition every now and then.<span ref="section-6"></span> It moved
            the huge sycamore and cottonwood trees that used to line the riverbanks and pushed the truck their
            neighbor had drowned in about twenty feet towards the river. It moved the broken pieces of blacktop
            with ease.</p>
      <p>Lewis felt almost spellbound by the feelings coming over him. Maybe they could give them news about what
            was happening downtown. Maybe they would know about the relief on the way. Holly arrived by his side a
            few moments later and the two of them ran towards the huge bulldozer now some 50 feet away, waving
            their arms over their heads for help. They could see the machine slowing until it finally disengaged
            and parked in the middle of its path with the engine still idling loudly. As they started walking
            towards the bulldozer the man in fatigues screamed loudly at them.</p>
      <p>“Back away from the vehicle. Back the fuck away from the vehicle!”</p>
      <p>They were stunned. Holly spoke up first, “What’s . . .” She stuttered, “We need help, we’re very hungry,
            can you tell us what’s going on?” Lewis stepped forward slightly, “We need help, we’re running out of
            . . .” and before he could finish the man in fatigues fired three rounds from his rifle into the air.
            The couple immediately fell back in fear, holding their hands above their head and crouching near the
            edge of the road, unsure in what direction the man had fired towards.</p>
      <p>“Stay the fuck out of the way, I will shoot you if I have to.”</p>
      <p>The man in fatigues then spoke into the radio fastened up by his collar, and the machine re-engaged,
            slowly driving past them, past their building, and down the direction the old man had gone, leaving a
            freshly scraped road in its path.</p>
      <p>Later that day another helicopter came flying into the river valley and dropped a huge collapsible steel
            girder bridge across the area near where the old one used to sit. Lewis and Holly watched from the
            upstairs window as men arrived in a big grey truck, who quickly jumped out of the open bed to fasten
            the contraption down to the ground. The whole thing took only about a half an hour, with the
            helicopter flying away back towards the city, and the men in the truck going back down the road from
            which they had arrived.</p>
      <p>The only other traffic that week was a small convoy consisting of four vehicles. It was just before the
            light started to get long, late afternoon in early winter, when the sun sets behind the mountains but
            still leaves the sky bright enough to see outside.</p>
      <p>There was a 4X4 truck up at the front that had a large machine gun mounted in the bed, manned by a
            similar looking soldier as before. Behind them were two cargo trucks, the kind with eight wheels and
            covered beds, and behind that, a black SUV with no markings and dark tinted windows. They didn’t stop
            either. They just continued down the newly plowed roadway, moving around the obstacles in their path
            in unison, and leaving only huge clouds of light brown dust, kicked up from the drying mud deposited
            by the flood waters.</p>
      <p>Lewis tried to hold down his tears that night. He knew what happened to places like theirs when this
            happened. Nobody was coming. They could either take their chances walking down the highway, trying to
            find help in the city, or they could make their way into the camps up in the mountains. Both options
            failed to fill either of them with much confidence, and conversations usually stalled in desperate
            exacerbation when they managed to try and discuss what their plan might look like.</p>
      <p>True feelings of dread overwhelmed Lewis, and that night while coming home from a walk, he broke down on
            cold hard ground, sobbing with deep heaving motions throughout his whole body.</p>
      <p>Holly had a brother, but he was close to 700 miles away in Vermont. Lewis didn’t have any of his family
            left, though he did have some ideas about what life was like in the city. Things he’d heard from Mr. G
            and some of the other men that used to get together over there.</p>
      <p>There were people that could get you started, find you a place to live, even put a little money in your
            pocket. The catch was that you worked for them, and Lewis didn’t believe the jobs would be quite as
            easy as hauling a couple backpacks of weed off the mountain every other week. This was all assuming
            that everything going on over there was fine, when in fact they had no idea what was happening outside
            their little area.<span ref="section-7"></span> The camps, however, if anyone managed to survive the
            storm, would at least know Lewis as the delivery guy, and couldn’t possibly be that far off from the
            river.</p>
      <p>That evening while lying in bed Holly found a signal on the emergency radio; it was a looping message
            that played in a monotone string of words. “Attention: Emergency relief station 434 is currently in
            service for the City of Charlottesville and surrounding areas, effective immediately, located near the
            junction of US 29 and US 250. Thank you.” They tried to talk while Bernie lay in the warm light coming
            in the western facing windows.</p>
      <p>“What are we supposed to do if we can’t find anyone up there.” “I don’t know.</p>
      <p>Come back here, rest a little, and head towards the city I guess” We’ll be out of food by then.” “I
            know.” “We can’t stay here.” “I’m not saying that. I know.”</p>
      <p>The two of them spent the rest of the evening alone, thinking, crying, trying to find some place that
            felt good, then came together to sleep anxiously, both waking just before dawn.</p>
      <p>It took Lewis about half an hour to pack up their things, which had been consolidated down to just two
            bags, stashing the last of their supplies under their building in the old well room, hidden beneath
            some old scraps of black trash bags and shredded insulation.</p>
      <p>So with Bernie strapped to top of Lewis’s bag, and their packs loaded with as much as they could carry,
            Lewis and Holly made their way down the new road towards the mountains.</p>
      <img src="/images/9.jpg" />
      <p>The new road was much easier to navigate since it had been plowed and driven over several times, now
            working its way deeper into some of the fields, avoiding the tangled messes scattered around them on
            every side. The force of the water had completely rerouted sections of the river causing small islands
            to be formed, some only being as large as a couple ragged looking trees, still deeply holding on to
            their positions underneath the stream bed.</p>
      <p>The first house they expected to see was totally washed away. It was an old farmhouse built well before
            the turn of the last century and had always held an imposing presence in that area. The remains were
            completely buried with mud and silt, with the exception being a long piece of white plastic pipe that
            jutted abruptly out of the high fieldstone foundation.</p>
      <p>They thought they might be closer to the next little village down the road but had no way of judging that
            by its current appearance. Huge piles of debris lined the roadside where the small white houses and
            workshops used to sit. Dotting the landscape around them was the occasional rotting animal, horses and
            cows mostly, which when the wind blew right, put off a rotting smell that lingered deep in their
            nostrils.</p>
      <p>The stench only intensified the closer they got to the next community, with the couple quickly realizing
            the source was coming from bodies hanging in stiffened unnatural positions on the tree limbs high
            above them, wearing the soiled clothing that they had drowned in. They tried to keep their heads
            straight ahead and focused down the road so to not catch one of the ghastly faces that surrounded
            them, but the urge to identify their neighbors was too strong at times. Holly knew only one of the
            people she saw, recognizing the sweater of the young cashier from the store just up the road. Lewis
            choked down little spasms of vomit as the scent dulled and slowly normalized in his sinuses.</p>
      <p>Then came a more barren and monotonous stretch of flat river bottomland. Nothing but piles of trees, old
            cars and trucks, crumpled up like crushed cans, mixed altogether with jagged pieces of homes and
            trash. The old cinder block store and apple warehouses by the river had survived, though like their
            own home, were missing all its windows and doors. Hundreds of footprints had dug paths through the mud
            in and out of the buildings from others trying to pick anything they could out of the rubble. They
            didn’t even bother to look; they knew there wasn’t anything left.</p>
      <p>The huge lodge building that sat on the steep hillside to the left of town had been partially destroyed
            by a landslide. It had been derelict for years, but everyone knew that travelers used it as a shelter.
            They saw a few people standing around a fire burning in a huge barrel near the remaining portion of
            the lodge but didn’t stop to chat, much preferring not to be seen at all. The bridge that led to Finks
            Hollow was also washed out, and even though the water had receded considerably over the past week or
            so, the current was still too strong to navigate over. They would have to travel up the fire road the
            whole way up.</p>
      <p>Some of the homes in this area had made it through the storm, as did much of the old roadway, which
            proved to be an almost jarring glimpse of normalcy in comparison to the ravaged old turnpike road
            behind them. The couple did not expect to see the small group of men standing outside a small frame
            house, however, who stared blankly towards them as they passed. The men looked tired and wild, with
            their pants covered in thick mud caked around their ankles. One of the men had a semi-automatic rifle
            fastened to the mid-section of his vest, his finger clearly sitting above the trigger.</p>
      <p>Lewis and Holly acknowledged them only once by briefly making eye contact, then quickly returning their
            sight to the road ahead of them. The men made no sound as they passed. Thick smoke billowed out of the
            home’s little cinder block chimney as dogs barked from a kennel behind the small garage.</p>
      <img src="/images/10.jpg" />
      <p>Lewis and Holly cut off into the woods just before they got to the old parking area near the entrance to
            the fire road and walked up the hill as quietly as they could. Before the storms there had been a
            small guard booth and swinging gate there, which most of the time was usually unoccupied. It was the
            cameras they were most worried about today. Even though they were both pretty sure the machines were
            not functioning, they didn’t risk it. They hiked high above the old turnpike road, and from this new
            vantage point on the hillside could clearly see the rough dirt path making its way up the entire side
            of the mountain, and deeper into the hollow.</p>
      <p>Holly heard the low rumbling sound of a truck engine first, and the couple came to a stop with just the
            faintest sound of dry leaves crunching beneath their feet. They had made it about a half a mile past
            the security booth and a quarter of the way back down the hillside, when, way up ahead, a large grey
            box truck turned onto the straight section of road heading down the mountain. Holly crouched behind a
            freshly fallen tree, pulling Lewis down with her, and watched as the truck inched towards them.</p>
      <p>It was an older model you didn’t see much anymore, the kind with a large cab up front and a big box in
            the back with the roll up door. This one had two square holes cut on each side of the box, with a
            thick steel wire screen embedded in each opening. They could see people sitting inside, gripping the
            woven steel with their hands, watching the scenery as they passed by.</p>
      <p>Lewis and Holly waited for almost thirty minutes after the truck had passed, just to make sure no one
            else was coming, and then made their way down the rest of the way to the fire road, not wanting to
            discuss what they just saw. They just hiked the rest of the way down to the river and sat behind two
            large boulders to eat a little lunch, splitting their last sweet potato and a can of condensed milk.
            Lewis took advantage of the moment to filter two bottles worth of water in the river. They would need
            it after the road ahead.</p>
      <p>This section was steeper with more loose stones underfoot than the previous miles, as well as a sheer
            drop on the right-hand side that extended almost fifty feet down and ended in a great pile of trees
            and broken branches reaching in every direction. Some sections of the road had fallen in on themselves
            during the rains, and the couple made their way through crude horseshoe shaped bends that had been
            hastily dug out by an excavator, leaving dense stratified layers of dirt still smelling of freshly
            moved earth.</p>
      <p>They kept a quick pace for at least three miles, only stopping only once for water, and did not speak
            except for quick encouragement to one another. Their leg muscles ached, begging for rest, but they did
            not break until they hit the large sloping plateau near the old drop off location, finally slumping in
            to the ground behind a large pile of brush near the river.</p>
      <p>Lewis set Bernie’s carrier down and propped himself up to lean against his pack, trying to catch his
            breath. The weather was beautiful today, with a clear blue sky and a warm sun shining on his bare
            arms. Lewis closed his eyes and felt brief memories of the moments he and Holly had spent wandering
            these trails over the years, only to be confronted with the sporadic destruction from the hurricane
            all around them. The 12-mile journey had taken all day. “Let’s keep going a little farther, there’s a
            lot of room right up the road from here.” Holly finished the last of her water bottle and pulled her
            pack back on her back. “Let’s go.”</p>
      <p>The spot they picked for camp was beautiful. There were large sections of the forest that remained
            largely untouched from the hurricane, though obviously disturbed by the huge quantities of wind and
            rain, and Holly chose a flat area at the top of the riverbank behind a pile of briars and fallen
            trees.<span ref="section-8"></span> This place was covered in a thick evergreen layer of ground cedar,
            offering just the slightest padding and shield from the cold forest floor.</p>
      <p>They quickly pitched their tent and hung a clothesline between two small saplings. Holly fired up their
            small camp stove to cook their last can of beans while Lewis washed their socks and underwear in the
            river, even getting in himself for a minute, slightly regretting the decision while trying to dry
            himself off with a small hand towel in the cold air. After dinner Holly did the same, coming back up
            to the camp just as the sun was setting to dry herself with an old t shirt and put on her clean
            clothing.</p>
      <p>That night they opened the carrier door for Bernie, and for the first hour or two he wouldn’t budge,
            staying glued to the cold plastic of his temporary home. That night the couple laid close together in
            their sleeping bags listening to the soft brushiness coming down the hillsides that fluttered against
            their tent all night. When they woke up Bernie was sleeping between the both of them, with paws tucked
            over his eyes, and sleeping on his tail.</p>
      <p>Lewis woke at dawn and went down to the river to filter more water for their breakfast. He had his boots
            slipped on loosely and was relieving himself onto the muddy riverbank. He yawned, slowly stretching a
            little, feeling their first night’s sleep in the backcountry around his neck the most.</p>
      <p>Suddenly, there in front of his blurred vision, Lewis struggled not to scream. A fully grown black bear,
            its hair matted and thin with a deep unfocused look in its eyes, stared back at him, shaking its head
            upwards with each sniff of the air nearest to him. The bear looked at Lewis, gave the slightest grunt,
            blinked once, and turned back towards its business further down the river. Lewis stepped back slowly
            trying to button his pants while walking across the rocky riverbank until he reached the flat area by
            their camp. It was a healthy reminder of whose house they were in.</p>
      <p>The couple enjoyed a cup of sub for breakfast, and even though the both of them felt desperately hungry,
            it felt good to be in their little camp. Even with the bears and unknown night sounds all around them,
            it felt safe. It would be a quicker trip down the mountain, if need be, and even Bernie was calm.</p>
      <p>After breakfast they both agreed to take a direction, either upstream or down, alone, and come back to
            camp when the sun started to shade the hillsides, or at the first sign of bad weather. Today Lewis
            took the climb upriver and Holly took the descent, and with each of them packed with a handful of
            dried nuts and full water bottle, they began their search for help.</p>
      <img src="/images/11.jpg" />
      <p> If you could forget the steady pangs of hunger it was easy to get lost in the beauty of the season while
            hiking up and down the river. There were barely any trees that retained their leaves after the storm,
            but the ones that did shined with a brilliant yellow that cut through the almost monochrome blue,
            brown, and gray of the early winter landscape. Both were occasionally startled by the sound of a stray
            deer or turkey making their way through the wooded hills on either side, half hoping to see another
            person, and always fearing it could be an agent of the security service. But as the sun started to get
            long, and the chilly air began to blow down the river, both Lewis and Holly turned around and headed
            back to camp.</p>
      <p>Lewis beat Holly home and had dinner waiting when she returned. “I only saw a huge culvert pipe about
            halfway up today. It was totally trashed, but looked pretty new,” Lewis said, in between bites of
            food, applying the last squeezes of the antibiotic ointment to the wounds around their ankles. The
            scabbing would continue to heal if they could keep clear of the mud. Holly lay down on top of her
            sleeping bag, putting her arm over her face while Bernie investigated the half open flap to their tent
            that led outdoors.</p>
      <p>“We’ll try again tomorrow.”</p>
      <p>They held each other tightly all night with Bernie tucked between them. A large owl sounded off somewhere
            deep in the woods while the soft running sound of the river below carried them deeper into their
            dreamtime.</p>
      <p>It was Holly who found the girls the next day, maybe about a mile or so up the river. They were filling
            up two-gallon plastic jugs in a deep flowing pool and washing some clothes against a large boulder in
            the center of the stream, totally unaware of her presence. One of them screamed, but everyone quickly
            understood that no one was in any danger. Holly told them about Lewis, what he used to do with the
            deliveries, and what happened back where they came from.</p>
      <p>One of the girls didn’t speak, she just stood with her hands behind her back and her head slightly cocked
            towards the ground, looking for her partner to handle the situation. The other looked Holly deeply in
            the eyes, explaining they were strictly forbidden to bring anyone back to where they lived, but
            promised Holly that she would send someone for them tomorrow, then watched as the girls tied up their
            laundry to the sturdy poles they were carrying, slung them over their shoulder, and made their way up
            and over the nearest finger of the ridge, out of sight.</p>
      <p>Holly ran down the path back to camp, feeling a tremendous burst of energy and lightness of heart. Her
            face was even hurting near the corners of her mouth from smiling, muscles she had not used much in the
            weeks leading up until now. Lewis was looking haggard by the time he returned that evening. When Holly
            told him who she saw he burst into tears, digging his face into the crook of her neck and hugging her.
            They shared their last can of soy loaf and slept through the night, waking just about dawn to the
            sound of someone walking through the woods towards them.</p>
      <p>Neil was around sixty years old. He wore a full white beard which was bound 5 times by rubber bands in
            equal segments all the way down to the tip.<span ref="section-9"></span> His shoulder length hair was
            tied in a knot on the back of his head, and he was dressed only in green coveralls and tattered
            leather boots. He stopped about fifty feet from the tent and confidentially gave out a short hollering
            sound followed by, “Hello . . . Holly, Lewis, my name is Neil, I heard you all might need some help.”
      </p>
      <p>Holly put Bernie back in his little carrier and the two of them stepped out to meet the man, who greeted
            both of them with warm eyes and a handshake. The couple introduced Bernie while showing him what
            little food they had left. Neil immediately began to question the couple, down to every minor detail
            of their trip. Lewis offered the man some sub, but he refused, returning to the interrogation.</p>
      <p>“I don’t make the rules on my own” Neil said after a brief moment of silence between the three of them.
            “I’ve got to run this by the others . . . regardless, we’ll be back tomorrow with more information and
            a little food . . . Please don’t follow me. I’ll know if you followed me and that will be hard to
            explain that to the others. We work together up here. I hope you understand.”</p>
      <p>The couple watched as Neil disappeared into the woods, out of sight, and spent the rest of the day
            washing the last of their clothes and preparing as best they could, just in case they’d be leaving in
            the morning. Even Bernie could feel the emotional shift in the tent that night and lay awake all night
            watching over his companions.</p>
      <p>The morning came and went with no sign of Neil or anyone else. Lewis even had time to filter more water
            and pack up their tent completely, stacking all their gear in a neat pile beneath one of the large
            sycamore trees near the camp. Finally, around midday, they heard Neil whistle from the top of the hill
            just across the river from them. There were two others with him, a younger man and a woman, each
            carrying a small pack on their back.</p>
      <p>The three strangers climbed out of the slight earthen shelf of the riverbed and Neil once again greeted
            the couple, introducing Mel and Ryan, who met the couple with a subtle warmth they both felt to be
            genuine. They offered the couple some small puck sized cakes and an off-white liquid from an old
            plastic bottle. Neil did all the talking.</p>
      <p>“We make all the rules together,” Neil said firmly. “There is no coming or going when you feel like it.
            There are no fires permitted. If myself or any of the others ask you to assist us with a task you will
            try your best. We all pull our weight out here, is that clear?” “Of course,” they almost said in
            unison. And just like that, the six of them were on their way.</p>
      <p>They hopped across the river on large stones protruding above the slow flowing current, then up the
            hillside directly in front of them. Curving around the next bend, the group came upon a huge open area
            with hundreds and hundreds of dead trees, their grey petrified trunks stuck firmly stuck into the
            rocky sloping field. Neil explained they were from the Hemlock blight. “You might be too young to
            remember that” he said, speaking back towards Lewis and Holly. “It’s not too much farther now.” As the
            group made their way through the barren section of forest to the top of the ridge they were facing,
            Lewis and Holly realized they had climbed much higher than either of them had expected, tricked by the
            subtle angle of their ascent.</p>
      <p>They followed the ridge, always remaining just on the inside of the tree line, trying their best to avoid
            the sporadic bald topped sections of mountaintop, shortly arriving at an obvious junction ahead. One
            path went up to the right between two huge boulders and over the top of the mountain, while the other
            wound down to the left along a nearly level area about thirty feet wide, with a thin line of hardwood
            and pine trees against a twenty-foot drop.</p>
      <img src="/images/12.jpg" />
      <p>They proceeded down towards the area between the trees and hard granite walls of the mountain, and as
            they rounded the turn they could clearly see a rock shelf casting a wide shadow across the area. There
            were thousands of stones piled up, densely packed with mud and dirt, making a huge wall that went from
            the earthen floor to the rock ceiling the entire way across, at least fifty feet in length. Small
            ferns and grass were growing all across the rocky outcropping. Towards the other side was a small
            opening with a dirty brown blanket covering the entrance. A little boy poked his head out of the
            corner and smiled at the group.</p>
      <p>“They call this one Little Stony Man . . . believe it or not there’s one bigger than this, it’s a way’s
            away though. Come on in and set your bags down, let’s have something to eat.”</p>
      <p>Neil held the dirty curtain open for the group and Lewis and Holly stepped inside the rock shelter. There
            were over twenty people inside. The young boy they had seen peeking out at them scurried behind an
            older woman towards the back of the shelter.</p>
      <p>There was an unmistakable lived-in smell to the dwelling. Body odor and damp earthen smells, but also the
            imprint of recent meals. It smelled like a home. Neil walked with them to a long workbench that
            doubled as the kitchen and heated up a pot on the induction burner by switching on a battery pack on a
            lower shelf.</p>
      <p>“This is a kind of nut milk we make. Its walnuts, hickory nuts, even a little bit of processed acorn
            flour. You had a little back at your camp if you remember.” Neil handed them each a battered old mug
            and a small bowl of dried berries and nuts and motioned for them to take a seat on a large plastic
            woven mat in the center of the dwelling. “Now, I believe introductions are in order.”</p>
      <p>Lewis and Holly walked across the mostly dirt floor of the rock shelter and sat on the large mat with
            some of the others. There were seven kids, a couple of teenagers and three young adults, all
            definitely under thirty, six older adults, and three more elders. Neil stood above the group sipping
            from his mug and gesturing towards the back end of the dwelling. “The kids stay all the way in the
            back of the shelter, the young people after them, then the older folks, and the rest of us right
            nearest to the exit.” Some of the children were fixated on Bernie’s carrier.</p>
      <p>“What’s it like down there?” asked one of the voices coming from a darker corner of the shelter. Lewis
            and Holly began to speak at the same time, but Holly led with her answer. “There really isn’t anything
            left in our neighborhood. Maybe there are a few folks living around where the old store used to be,
            but we didn’t speak to anyone. We saw a large box truck coming down the mountain though, they didn’t
            see us, but it looked like there were people in the back.” Several members of the group spoke amongst
            themselves in a hushed tone, finally settling back into silence.</p>
      <p>Neil spoke for the entire group next. “The rain we saw was tremendous. We’ve made contact with one of the
            other camps closest to us, and it seems like not everyone up here was so lucky. We lost most of our
            crops as well. I still have only found a few patches where our plants survived the storm.” Neil took
            another sip of his mug and crouched onto the mat beside Holly, waiting for anyone else to speak up.
      </p>
      <p>One of the elderly women cleared her throat and spoke with surprisingly loud volume. “It was the hardest
            rain I saw in my entire life.” Neil waited a moment and then spoke again through the gap in
            conversation. “We also found new places the water comes out . . . Some of that runoff squeezed through
            gaps in the rock we didn’t even know were there. But it filled up our water tanks for us, didn’t it
            gang . . .” One of the other older men chuckled once to himself.</p>
      <p>Neil took the opportunity to repeat the camp rules in front of the entire group. His tone was softer this
            time, but still wholly authoritative, and once the formalities were completed Neil opened it up to
            questions from the group.</p>
      <p>“What’s your cat’s name,” one of the children said, speaking with a long lazy “r.” “That’s Bernie,” Holly
            said, inviting them to come over and take a look. Two of the bravest children walked right over to the
            carrier while Bernie hissed, trying to look as fierce as he possibly could in his vulnerable position.
            “Don’t worry he’s a big softie,” said Holly. The children were not convinced. One of the other young
            children spoke up. “Are you married?” Lewis replied while laughing a little under his breath. “No,
            we’re not married, but me and Holly and Bernie are a family.” The child seemed content with the answer
            and rocked back to a seated position. One of the older women spoke up from a cot made of pallets along
            the stone wall. “How about some supper?” Neil got up and dusted himself off. “That sounds like a great
            idea.”</p>
      <p>Lewis and Holly tried to help in some of the meal preparation but were only told to sit down. “You’ll
            just be getting in our way anyway,” Mel said playfully while getting a big pot down off a rack
            fastened to the wall. The couple instead sat with Bernie and the children, trying with no luck to coax
            him out of his carrier to say hello to the kids. The children continued to berate the couple with
            questions while the smell of searing meat and onions filled the room.</p>
      <p>“How old are you?” “Does Bernie have any babies?” One of the smallest children sat with her mouth open
            picking at her crusty nose.</p>
      <p>A teenager emerged from the back of the shelter and introduced himself as Patrick. He didn’t say much but
            gave Bernie a little wave through the open cage door as he crouched on the mat next to the group.
            About an hour and a half later Mel hollered to the rest of the shelter, “Alright, come and get it.”
            The children immediately got up, running over to the counter, each grabbing a bowl and spoon and
            waiting near the large pot.</p>
      <p>The meal consisted of a thin, greasy meat soup of wild onions, some kind of leafy green, and dozens of
            small round dumplings made out of a dense nutty flour that soaked up the broth. Lewis and Holly did
            not ask what the meat was, but it had to have been either a raccoon or possum, maybe a groundhog, the
            bones were too big to be squirrel or rabbit. It was delicious, and easily the most nutritious meal
            either of them had in weeks. One of the children laughed at Lewis, seeing him spill his last bits of
            soup onto his pants while tilting the bowl towards his mouth. Their eyes grew tired while their
            bellies stretched to make room.</p>
      <p>Lewis and Holly helped the teenagers clean up after they ate. Mel showed them how to use the small
            battery powered water recycler near the kitchen bench while Neil and some of the other adults moved a
            stack of storage crates around in the corner to make a little room for their guests. All of the adults
            were now sitting around the central plastic mat on the floor, warmed by a large forced air heater that
            vented out the stone wall to the right. An older man was reading from a tablet device laying reclined
            in his bunk. Several of the women sat near each other, cutting squares off tattered pieces of clothing
            and stacking them to be repurposed into a new bed cover. Three teenagers sat at the small spool table
            by the entrance and played a card game, loudly carrying on.</p>
      <p>Someone put some music on a set of small speakers near the kitchen and storage area. It was a kind of
            rock and roll that Lewis remembered from his parents but couldn’t find the name. Neil showed the
            couple where the small library was and explained that they had two tablets and a signal booster, but
            that time had to be limited to each person. Lewis and Holly each chose from the selection, a July 22,
            2019, issue of Time Magazine and small paperback photo book titled “Shenandoah Vestiges” and settled
            in their corner to read until the lights went out.</p>
      <p>Their first night in the rock shelter came with immediate reminders that they were sharing the space with
            twenty-one other people. Bits of sleep talking and farts filled the room all night long, and Lewis and
            Holly woke the next morning to three children brushing their teeth above them. The group had a hot
            cereal breakfast made with some kind of soft grain cooked together dried fruits and nuts in the nut
            milk. After everyone had finished eating Mel invited Holly to go check the traps with her and another
            one of the other young people while Neil and Ryan showed Lewis how to dig a hole for the latrine.</p>
      <p>Lewis slowly chipped away at the rocky soil with Ryan, about four feet deep on a sloping section of
            hillside a couple hundred feet east of the shelter, then constructed a quick lean-to with a loosely
            woven pine roof. The whole thing was done before lunchtime, and Lewis enjoyed a little break playing
            with Bernie and the children with a feather tied to a string while he ate. He was just about finished
            when Neil and one of the other adults walked towards him.</p>
      <p>“Lewis, Susan here is our resident electrician. All of the adults here know need to know how the
            electricity works, it’s not very complicated, come on over here and we’ll get you covered.”</p>
      <p>Near the entrance was a three-foot-tall box that sat atop two pieces of broken cinderblock. It had wires
            coming from every corner of the rock shelter, and in the bottom right-hand corner displayed an overall
            battery capacity for the entire system, currently at 43 percent. To the left was a fluctuating number
            in the thousands with a large “W” next to it, and to the right was a similar vibrating figure with
            “Hrz remaining.” Susan explained that the batteries needed to be recharged at least once a week using
            two large solar panels that were stored in a waterproof crate near the entryway, and that the forced
            air heater and the mini fridge took the most power. Because of that, it was sometimes difficult during
            the winter to power more frivolous devices.</p>
      <p>They showed Lewis a thin wire that went underneath the framed entryway and towards the trees lining the
            front of the rock shelter. It left the electrical box and snaked its way underground all the way up
            the of a large pine tree, nearly thirty feet, to a series of carefully hidden rollable solar panels
            attached to its trunk.</p>
      <p>It provided just enough juice to power their lights inside, Susan explained, and after a brief demo, she
            showed Lewis how to position the solar panels so they could charge the main box. Susan stood above
            Lewis smoking something out of a small black pipe. “If you hear anything . . . people, drones, even if
            it could be a big animal . . . pack it up and come inside. We don’t take any chances.”</p>
      <img src="/images/13.jpg" />
      <p>Holly hiked with Mel and Pete for miles and miles all morning, steadily making their way along a looping
            path around a lower portion of the mountain they were living atop. They checked their route carefully,
            with Mel filling Holly in on the other duties that came with the job. Before the storm, part of the
            daily chore required checking areas the group had planted along their route; potatoes, groundnuts, and
            that grain they ate for breakfast, amaranth, as well as berries and nuts when they were in season.
            They also planted rotating vegetable gardens of more traditional crops when and where they could and
            found that they provided excellent bait for their traps.</p>
      <p>Today they found most of their snares undisturbed. Three, however, had to be reset, and Mel showed Holly
            how to make a loop out of the wire so that it tightened when an animal passed through, staking them
            securely to the ground. Mel then baited each with a small stick coated in grease from a leftover meal.
            “We have to check these every day. If we don’t something else would come along and take whoever gets
            caught up in ‘em.”</p>
      <p>Holly noticed the small bat tucked in a crude leather holster worn on her hip. It was a thick section of
            hickory with a small weight stuck in the top, wrapped in thin pounded metal. Mel assured her that if
            they found anything it would be a quick and painless end to the creature’s life. The three stopped to
            let a few stray turkeys walk ahead of them and watched as they carelessly went on their way. “Who’s
            hungry.” Said Mel, pulling her backpack off as she stopped to sit on a fallen log.</p>
      <p>Mel pulled out a small plastic bag of dried cakes and passed two of them to Holly. “They’re not the
            greatest thing in the world but they’ll fill you up.” She said, passing three over to Pete. “More like
            clog you up,” Pete said, spitting out a bit of food while laughing to himself, even getting a burst of
            laughter out of Mel. “Just make sure you get plenty to drink, you’ll be alright.” Holly bit into the
            dense cake and found bits of dried fruit and nuts chopped throughout. It was sweet, though a little
            hard to choke down without a drink.</p>
      <p>“So, you and you your old man, you’re cool, right?” Mel asked flatly, looking over at Holly while the
            three ate their lunch. Pete pretended he wasn’t there. “We’re cool . . . We wouldn’t be here right now
            if we weren’t. I really don’t know what we’d have done if we hadn’t found you all.” Mel chewed her
            food while mulling it all over in her head, then immediately started teasing Pete for the thin, skin
            colored beard he was starting to grow. “We’re out of razors . . . what do you expect . . .?” Pete was
            turning bright red while Mel smiled to herself, digging around in her backpack for her water bottle.
      </p>
      <p>The three of them finished their rounds on the mountain trails and returned to the rock shelter several
            hours later empty-handed. One of the older kids spoke up from his bunk. “Nothing again?” in a
            snickering tone. “You can come go with me tomorrow if you want to keep that up, Adam.” He quickly
            turned his head to side, shying away in embarrassment, and returned to reading on his pallet. Lewis
            was helping some of the others prepare a similar soup to the one they had the night before and was
            mixing the dough with his hands when they arrived. That night they sat around the heater, watching the
            older folks mend clothing and tell stories about their lives before they moved up on the mountain. One
            of the elderly women, Nancy, was telling the children about the plants that used to grow along the
            ocean where she was from while the radio played a country station from somewhere in Valley.</p>
      <p>There was a brief unsettling moment when one of the children tried to grab Bernie and walk with him under
            his arm, only to receive the hard whap of Bernie’s claw across his left cheek. The child immediately
            began to sob and ran for the comfort of the older women. Neil calmy walked over the kitchen bench, got
            a clean rag and dabbed it on the spout of the large red container of homemade alcohol, and gently
            applied it to the child’s face as he kicked his little legs in protest and pain.</p>
      <p>Lewis and Holly were both so embarrassed, “Bernie’s never done anything like that before, oh my god,
            we’re so sorry!” Neil went back over to the alcohol jugs and poured three heavy glugs into some mugs,
            giving one to both Lewis and Holly, ushering them outside while the chaos indoors subsided. “Don’t
            worry about Kevin, he’s a little rambunctious, he’ll be ok. We need that cat more than you know
            anyway.” He said laughing a little. “We’ve got a terrible mouse problem in the wintertime. I think
            Bernie will fit right in.” Neil raised his drink to the two of them. “We’re glad to have you all here.
            You’re welcome to stay with us as long as it suits you.” With that the three knocked their mugs
            together and drank deeply from the smooth clear liquor.</p>
      <p>“It’s not been as easy as to live up here as it once was” said Neil, breaking the quiet of the moment and
            taking a sip of his drink. “The security has increased quite a bit lately, and some of the camps that
            aren’t as tucked away as ours were raided earlier in the fall. That’s actually when Nancy came to live
            with us. She was part of a settlement called Tom’s Rest to the southwest of here. Security came at
            dawn and marched them all out, but they left Nancy because she can’t really get around like she used
            to. They left her to die there . . . We would have never known if they hadn’t piled everything up and
            set it all on fire.”</p>
      <p>Lewis and Holly said nothing. This was the first time they had been reminded about where they were since
            they arrived at the rock shelter. “It took six of us two days to carry her back up here, working in
            shifts. But I think I can speak for us all that we are grateful for her company. She’s great with the
            children, and her and Ellen love teaching the younger people how to sew.” Holly wanted to ask about
            the children. Some of the younger ones were less attached to the adults and wondered if they might
            have been orphaned by similar circumstances.</p>
      <p>Lewis took a sip from his mug. “Do they patrol up here?” Neil spoke facing the two of them, “We see the
            occasional boot print here and there, but they can’t really access this area on foot as easily as some
            of the other areas. They send drones up here. That’s why it’s very important to travel with at least
            one other lookout. The three of them sat in silence then Neil answered himself, “There are more of
            them deserting their own camps than there are new people coming up here to live though, you can bet on
            that.”</p>
      <p>The stars were magnificent and shined brightly in the crisp air of early winter, with a big bright moon
            rising behind the Shenandoah Valley below. There, far in the distance, they could see faint twinkling
            clusters of light, dotting the countryside below them to the west.</p>
      <p>Lewis and Holly leaned against the rock wall finishing the remaining drops in their mugs. “Things move at
            a different speed here, but you get used to it,” Neil said smiling, then held the curtain open for the
            couple. The three of them were greeted by the warm interior of the rock shelter, with the first of the
            children and older folks settling in for bed, and music from the radio playing softly in the
            background. Neil patted both of them on the back as they entered. “See you in the morning.”</p>
      <p>Lewis and Holly settled into their new roles over the weeks that followed quicker than they imagined they
            might. They learned how to regiment themselves as a group. Eat as a group. Sleep as a group. Be around
            other people when they had meltdowns, especially the children, and mediate those problems as a group.
            Even Bernie had begun to leave his carrier and found a new favorite spot under the kitchen bench,
            sometimes even venturing out to sit next to the others on the central woven plastic mat.</p>
      <img src="/images/14.jpg" />
      <p>Weeks passed as Lewis and Holly hiked their routes in ever changing groups of two or three. They baked
            cakes using the solar oven on sunny days. They hauled water from the small, camouflaged cistern out
            front. They even learned how to dress a raccoon, though they were not yet the ones to put the poor
            creature out of its misery. And in this process, Lewis and Holly learned hundreds of things about the
            people they were living with. What their interests were, the dreams they had, and all too often the
            sad stories that changed their lives forever.</p>
      <p>Mel had moved up here when she was in her early twenties with an old boyfriend who left her one night
            without ever even saying goodbye. Jason was AWOL and told Lewis he ran away from his recruitment
            station after one of the drill instructors broke three of his fingers. There was also a soft spoken
            but intelligent middle-aged man named Rod who was released after he and some of the other people he
            lived with were rounded up and implanted with a chemical inhibitor. The hardware produced painful
            inflammation throughout his body if he “ever tried to puff on anything.”</p>
      <p>The older people did not speak much about the circumstances that led them to their current place in life
            but had over seventy years of memories from a different world to share, and many nights the whole
            group sat around to listen, even if most of them were only taking in little pieces of their stories.
      </p>
      <p>One day Lewis and Holly accompanied Neil to investigate a fire they saw just to the north of the rock
            shelter. Mel had spotted it the night before, and it was still burning when Neil got up at roughly
            four o’clock.</p>
      <p>On their long hike out there, Neil let a little more of his own history be known. He had been a National
            Park employee before the mass layoffs and eventually got to know some of the earliest camps by doing a
            similar gig that Lewis once had. His family lost their home when the second big fire came through the
            Valley and burned the subdivision they lived in, as well as all their neighbors’ homes, “down to the
            ground.” Neil and his family then lived at another camp until it became too crowded, so Neil, along
            with some of the others from the old place, worked together to build the rock shelter they now lived
            in.</p>
      <p>Mel, Ryan, and Neil were the only adults left from that first group. Several of the children remained but
            they had no memory of the events that had taken place. No one was sure exactly what it was, but a
            terrible sickness ripped through the group in the second year they were at the rock shelter. It killed
            Neil’s wife and his youngest daughter. His other two children had left the camp in the last couple
            years and Neil hadn’t heard from them since. All the others had similar fractured histories of pain,
            but everyone tried to look out for one another, and it helped during the hard times.</p>
      <p>The three of them rounded a hill overlooking where the fire had been. There, below them in a small flat
            section of hillside, were three sleeping bags, two sagging with lifeless grey bodies still tucked into
            the nylon fabric, and the third person about twenty feet away from the now cold fire, slumped to the
            side with one of their legs awkwardly tucked beneath them. All three had been shot with a high caliber
            rifle at close range.</p>
      <p>All kinds of rumors were always making their way around the rock shelter. Mel heard that the women who
            got caught up there “had their insides taken out so they couldn’t have any more babies,” or at least
            that’s what she heard from some of the other people that visited their camp every now and then.</p>
      <p>Ed, the older man who lived in the shelter with them, told Lewis one night that a new kind of pink
            powdered drug tore his last camp apart. It was something that some of the security agents had started
            selling to the younger people. “After you smoked that long enough it changed you,” He told Lewis
            through a stony face. “The young people just started getting violent. One kid killed another of the
            women in our camp and we had to tell him and the others to leave. I knew they ran a tight ship up
            here, and I’m glad I’ve been able to help a little,” he laughed as he sat back into his chair, “though
            I’m not quite sure how I’m helping most of the time.”</p>
      <span ref="section-10"></span>
      <p>One night a man from one of the allied camps about five miles away came to see how everyone was doing
            with medical supplies and food stores for the winter. He told the group that it looked like security
            was doing sweeps from the northeastern section of the property, already dismantling one of the largest
            camps in that area.</p>
      <p>About a week after that Lewis and Holly heard the drones for the first time. They were not the small
            black ones that sounded like huge houseflies. They were the long airplane shaped drones that flew
            higher in the sky, scanning the hillsides for any anomalous data they could collect from its
            digitalized environment. Lewis was helping carry laundry from the river and Holly was on the trail
            with two of the others when the deep whining engines of the drone flew over their heads. They had been
            told what to do before by the others, several times now. You were to immediately drop to the ground
            and cover yourself with whatever leaf litter you could, trying to obscure as much of your body heat as
            possible, remaining hidden until at least five minutes after the drone had passed.</p>
      <img src="/images/15.jpg" />
      <p>The cold reaches of December finally moved into their section of the Shenandoah Blue Ridge in the days
            that followed. Even though it had been years since the valleys below them had seen much winter
            weather, snow still made its way into the mountains now and then, coming in short bursts of sleet, or
            thin coatings of ice on every tree branch for a day or two, eventually melting in the midday sun and
            leaving everything a slippery mess.</p>
      <p>No one was permitted to leave the rock shelter until everything had melted for fear of leaving visible
            muddy footpaths in the snow, though the children could hang outside and play under the trees throwing
            snowballs. That night everyone in the rock shelter stayed up late cracking nuts and pounding them into
            a course meal for their nut milk. Neil even broke out some of the homemade booze, enough so that the
            group polished off one of their red five-gallon containers.</p>
      <p>They sat around the large woven plastic mat on the ground, warming themselves by the heater, telling
            jokes and laughing, while some of the older people sang along to songs that played on the radio, then
            slept deeply all night long.</p>
      <p>That next afternoon, after most of the snow had melted around them, Lewis accompanied Neil to check the
            traps. It had been a week since the group had any meat, and Neil was confident that they’d bring
            something back. Sure enough, they had two possums, big ones too, each sluggish from being snared by
            the neck for several days in the freezing cold. Lewis kept an eye on the sky while Neil baited the new
            traps, and on their way home Neil stopped to show Lewis where some wild ramps had already begun to
            grow, only slightly burned by the light dustings of snow and frost. After the two stuffed as much as
            they could in with their kill, they headed back to the rock shelter, proud of their work.</p>
      <p>There was palpable anxiety in the shelter when Neil and Lewis returned. It looked like a couple of the
            children had been crying and there was a tense silence holding the group tightly. It didn’t take long
            to get the full picture.</p>
      <p>“They saw the light coming off the oven, I’m sure they did,” said Susan, speaking up first. Neil took a
            deep breath and after a brief moment of silence spoke in a calming tone. “There’s lots of trash
            throughout these mountains, lots of stuff to reflect light like that oven, please don’t panic
            everyone.” Patrick spoke up from the back. “It was one of the small black ones, it was flying just
            above us but behind some of the bigger rocks. It just popped over the top, we never could have never
            heard it coming.”</p>
      <p>Someone near the back of the room began to weep while Susan moved closer to Neil. “I’m sure they saw us.
            It hovered out front for almost a minute. We covered up the panels and ran inside but I’m sure they
            saw us.” Another long stretch of silence passed with only the sound of the fan blowing within the
            heater beside them. “We’re going to wait this one out, just like the last time.” Neil said to the
            group, gesturing with his hands to slow down and take a breath or two.</p>
      <p>Jason spoke quickly after. “Don’t you remember what happened last year? They’re doing a sweep Neil, you
            heard it the other day yourself. This is it man.” Some of the children began to cry as the energy in
            the room moved to a darker place. Holly made her way across the room to stand by Lewis. “Just settle
            down everyone. Look, we’ve got some good stuff to eat tonight, if anything was going to happen it
            would have happened by now. Let’s just take a minute to collect ourselves and get some food ready,
            ok?” The group murmured softly in assent.</p>
      <p>The quiet chore of preparing dinner was a welcome task for everyone in the rock shelter that night, with
            each person falling into the muscle memory of countless meals before. Only the soft pattering of pans
            and chopping sounds were audible now as the whole group moved in silence. Susan and some of the
            teenagers skinned the possums and prepared the meat while Mel, Ryan, and Holly peeled small, wrinkled
            potatoes and dropped them into the large soup pot along with the ramps. Lewis messed with the
            electrical box, unplugging some other parts of the room to sufficiently power the small induction
            range they were cooking on. And only a few minutes later the whole rock shelter began to smell of the
            rich greasiness of a hearty soup.</p>
      <p>The group ate in almost total quiet that night as well, with only some of the older people breaking the
            silence to praise the quality of the meat that Neil and Lewis brought home to the group. Rod tried to
            tell an old joke about possum stew, but it fell flatly against tonight’s dinner crowd.</p>
      <p>The group tried their best to rest, foregoing any evening radio music for their own solitude, even
            turning out the lights an hour early, just in case the raid was conducted in the early morning hours.
            But another night came and went, as did the anxious dreams and troubled tossing and turning, and the
            entire rock shelter was filled with an immense sense of relief as everyone observed the following
            morning’s sunrise with no sign of the security agents.</p>
      <p>The whole next day passed with a tense uncertainty observed by all, with a brief flyover from one of the
            security agents drone units being the only event breaking up the terrible monotony. No one was
            permitted to leave the shelter, not even to get water from the tank outside or use the latrine during
            the day, instead using designated containers they filled with sawdust.</p>
      <p>Jason was the first to crack under the pressure. “We’ve got to get out of here Neil. Do you know what
            they’ll do to me if they find me?” Neil knew all too well, but remained firm in his decision, and was
            backed up by several of the elders. “I’m not waiting around to die, Neil,” Jason said, and he and
            Patrick packed up their few belongings and left the rock shelter in the bright midwinter sun.</p>
      <p>It was just around dusk when they heard two distinct shots fired by a rifle, followed by a series of
            short bursts of gunfire. They echoed through the hillsides, distorting in speed and timbre as the
            sound found its way to the careful ears listening inside the rock shelter.</p>
      <p>Anxiety crawled through their skin in waves of icy prickliness as the group ate that night. Many had no
            appetite at all, lost in the sleep deprivation and fear, too tired to cry. Mel flicked off the main
            overhead lights around eight o’clock that night, with some of the group already in and out of sleep by
            that time anyway. Lewis tucked his body tightly against Holly’s and heard Bernie purring loudly from
            the center of the sleeping area near the others.</p>
      <img src="/images/16.jpg" />
      <p>Lewis felt his body jerk awake twice before quickly slipping into the distorted reality of his dreamtime.
      </p>
      <p>He found himself suddenly outside a huge lodge building. It was only one story, but very tall, and had
            many changing sections of rooms branching unevenly off of the central hall. A silent snow was slowly
            falling on the wet ground around him, speckling his vision with a continually changing backdrop of
            different sized flakes.</p>
      <p>Lewis walked into the front entrance to find a huge timber-framed hall, lined with overstuffed couches
            and large stone fireplaces that remained cold and unlit. There were workers everywhere, picking up
            furniture and loading it onto carts, taking measurements of doorways and windows, and rolling up the
            huge rugs that were stacked around the edges of the room. Lewis tried to stop one of the men coming
            towards him, but the man walked right by, not even acknowledging Lewis’s hand on his shoulder as he
            passed.</p>
      <p>He watched as the man walked towards an area off to the side that looked like a small museum. Following
            his path and into the adjacent rooms, Lewis found more workers, all busy taking down displays of old
            farming tools, rusted skillets, and black and white pictures fastened to the walls. The men had huge
            bins on the floor and were carelessly tossing the objects into each one with total disregard, causing
            glass bits to shatter and paper to tear under splinters of wood. That was when Lewis noticed the
            family standing just to his right.</p>
      <p>The old man wore a long dark beard and floppy brimmed hat, the rest of his body covered by an old, oiled
            coat and patched trousers. The two women were of similar age and wore long homemade dresses, one with
            a stiff bonnet upon her head. The children were next to them, barefoot, and wearing outfits made from
            scrambled bits of clothing. They stood in a straight line against one of the museums displays and
            stared at Lewis with an unflinching gaze as all sound around them was sucked away into a shattering
            noise from the window behind them, crushed by the wrecking crew, now diligently working their way into
            the building.</p>
      <p>The group all heard it at the same time. It was a hollow canned sound that briefly bounced around the
            front of the rock shelter and then exploded into a blinding white light and burst of harsh smoke.</p>
      <p>“MOVE, MOVE, MOVE!!” screamed the men just outside the entrance, as they flooded the room in a sloppy
            tactical maneuver. Neil jumped out of his bed and ran towards the men with his hands up. One of the
            agents panicked, and shot Neil twice in the chest with his rifle. “Get down on the ground!” the men
            shouted.</p>
      <p>Deep wailing cries echoed throughout the rock shelter, buried by the pounding of a large sledge against
            the outer stone wall, causing mud and rocks to fall on the people who were sleeping closest to it.
            Large sections of the stone wall began to crumble, shining small tunnels of daylight onto the ground
            all around them as the captain of the security agents barked his orders at the group.</p>
      <p>“Get down on the fucking ground, do you hear me?” he screamed. Two of the men grabbed the teenagers,
            laughing as they threw them against the dirt floor with great force. Lewis and Holly fell to the
            ground right behind Neil, who lay lifeless on the damp floor beside them.</p>
      <p>“There’s just a few of them here, come on let’s wrap this shit up” said the captain, pacing back and
            forth next to everyone. Three of the security agents went down the line of bodies and zip tied
            everyone’s hands together, then jerked them up to their knees and then onto their feet, tying the
            whole group together with a long plastic rope.</p>
      <p>“Let’s go, let’s go, let’s go!” the captain cried. As soon as everyone was out of the rock shelter one of
            the men lit a large flare and tossed it through one of the holes in the wall. As the fire spread
            Bernie came running out of the entrance, taking a moment to look back, and then leapt deep into the
            forest. “This one can’t walk good,” said one of the men, gesturing at Nancy. “Fuck it. Leave her.” So
            he tossed the woman onto the cold ground, her hands still tied behind her back, while the fire spread,
            and the rest of the group disappeared down the mountain.</p>
</template>

<style scoped>
p {
      max-width: 80rem;
      width: 100%;
      margin: 0 auto 1.5rem auto;
      text-align: justify;
}

img {
      max-height: 100vh;
      max-width: 100%;
      object-fit: contain;
      display: block;
      margin: 4rem auto;
}
</style>
