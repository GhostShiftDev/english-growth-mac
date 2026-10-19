export const CONTENT = {
  appName: 'English Growth',

  levels: [
    { id: 'beginner', label: 'Beginner', color: '#0E7C86' },
    { id: 'intermediate', label: 'Intermediate', color: '#2FA84F' },
    { id: 'expert', label: 'Expert', color: '#2C3E8C' },
  ],

  units: [
    { n: 1, theme: 'Greetings' },
    { n: 2, theme: 'Time' },
    { n: 3, theme: 'Family' },
    { n: 4, theme: 'Home' },
    { n: 5, theme: 'School' },
    { n: 6, theme: 'Food' },
    { n: 7, theme: 'Clothes' },
    { n: 8, theme: 'Body' },
    { n: 9, theme: 'Animals' },
    { n: 10, theme: 'Colours' },
    { n: 11, theme: 'Places' },
    { n: 12, theme: 'Transport' },
    { n: 13, theme: 'Weather' },
    { n: 14, theme: 'Travel' },
    { n: 15, theme: 'Work' },
    { n: 16, theme: 'Hobbies' },
    { n: 17, theme: 'Culture' },
    { n: 18, theme: 'Grammar' },
    { n: 19, theme: 'Emergency' },
    { n: 20, theme: 'Numbers' },
  ],

  // ---------- Lecciones por nivel y unidad ----------
  lessons: {
    beginner: {
      1: {
        title: 'Unit 1 - Greetings',
        es: 'En esta unidad aprendes saludos básicos y presentaciones en inglés.',
        points: ['Say hello and goodbye.', 'Introduce yourself.', 'Ask how someone is.'],
        examples: ['Hello, my name is Ana.', 'How are you?', 'Good morning!'],
        vocab: ['Hello, Goodbye, Please, Thank you, Yes, No.'],
        mistakes: ["Don't say 'Good night' to greet someone in the morning."],
      },
      2: {
        title: 'Unit 2 - Time',
        es: 'Aprendes a decir la hora, los días de la semana y los meses del año.',
        points: ['Tell the time.', 'Say the days of the week.', 'Say the months of the year.'],
        examples: ['It is three oclock.', 'Today is Monday.', 'January is the first month.'],
        vocab: ['Hour, Minute, Day, Week, Month, Year.'],
        mistakes: ["Don't say 'at Monday'; say 'on Monday'."],
      },
      3: {
        title: 'Unit 3 - Family',
        es: 'Aprendes los miembros de la familia y cómo hablar de ellos.',
        points: ['Name family members.', 'Talk about your family.', 'Use possessive adjectives.'],
        examples: ['This is my mother.', 'I have two brothers.', 'Her father is a doctor.'],
        vocab: ['Mother, Father, Brother, Sister, Grandfather, Grandmother.'],
        mistakes: ["Don't say 'my brother's name is'; say 'his name is' for a boy."],
      },
      4: {
        title: 'Unit 4 - Home',
        es: 'Aprendes las partes de la casa y los muebles básicos.',
        points: ['Name rooms of the house.', 'Identify furniture.', 'Say where things are.'],
        examples: ['The kitchen is here.', 'The bed is in the bedroom.', 'I live in a house.'],
        vocab: ['Kitchen, Bedroom, Bathroom, Living room, Table, Chair.'],
        mistakes: ["Don't say 'in the home'; say 'at home'."],
      },
      5: {
        title: 'Unit 5 - School',
        es: 'Aprendes vocabulario de la escuela y el aula.',
        points: ['Name school objects.', 'Talk about subjects.', 'Ask about homework.'],
        examples: ['This is a book.', 'I like math.', 'Where is the teacher?'],
        vocab: ['Book, Pen, Pencil, Teacher, Student, Classroom.'],
        mistakes: ["Don't say 'I go to the school'; say 'I go to school'."],
      },
      6: {
        title: 'Unit 6 - Food',
        es: 'Aprendes nombres de alimentos y cómo pedir en un restaurante.',
        points: ['Name food items.', 'Order at a restaurant.', 'Say what you like to eat.'],
        examples: ['I want an apple.', 'Water, please.', 'I like pizza.'],
        vocab: ['Apple, Bread, Water, Rice, Pizza, Burger.'],
        mistakes: ["Don't say 'a water'; say 'some water' or 'a bottle of water'."],
      },
      7: {
        title: 'Unit 7 - Clothes',
        es: 'Aprendes prendas de vestir y cómo describir lo que usas.',
        points: ['Name clothing items.', 'Describe what you wear.', 'Talk about colours of clothes.'],
        examples: ['I wear a shirt.', 'These are blue jeans.', 'She has a red dress.'],
        vocab: ['Shirt, Pants, Shoes, Dress, Socks, Hat.'],
        mistakes: ["Don't say 'a pants'; say 'a pair of pants'."],
      },
      8: {
        title: 'Unit 8 - Body',
        es: 'Aprendes partes del cuerpo y cómo decir que te duele algo.',
        points: ['Name body parts.', 'Say what hurts.', 'Use "I have" for body.'],
        examples: ['My head hurts.', 'I have two hands.', 'Touch your nose.'],
        vocab: ['Head, Hand, Foot, Eye, Nose, Mouth.'],
        mistakes: ["Don't say 'the my head'; say 'my head'."],
      },
      9: {
        title: 'Unit 9 - Animals',
        es: 'Aprendes nombres de animales y dónde viven.',
        points: ['Name animals.', 'Say where they live.', 'Describe animal sounds.'],
        examples: ['The dog barks.', 'A cat sleeps.', 'Birds fly in the sky.'],
        vocab: ['Dog, Cat, Bird, Fish, Horse, Cow.'],
        mistakes: ["Don't say 'a sheeps'; say 'a sheep'."],
      },
      10: {
        title: 'Unit 10 - Colours',
        es: 'Aprendes los colores y cómo describir objetos por su color.',
        points: ['Name colours.', 'Describe objects by colour.', 'Ask about favourite colours.'],
        examples: ['The sky is blue.', 'I like red.', 'Green grass.'],
        vocab: ['Red, Blue, Green, Yellow, Black, White.'],
        mistakes: ['Colours go before the noun: "a red car", not "a car red".'],
      },
      11: {
        title: 'Unit 11 - Places',
        es: 'Aprendes nombres de lugares en la ciudad.',
        points: ['Name places in town.', 'Ask where places are.', 'Give simple directions.'],
        examples: ['The park is big.', 'Where is the hospital?', 'I go to the store.'],
        vocab: ['Park, Store, Hospital, School, Bank, Restaurant.'],
        mistakes: ["Don't say 'in the park' when you mean 'at the park' for events."],
      },
      12: {
        title: 'Unit 12 - Transport',
        es: 'Aprendes medios de transporte y cómo viajar.',
        points: ['Name vehicles.', 'Talk about how you travel.', 'Buy a ticket.'],
        examples: ['I take the bus.', 'The train is fast.', 'I ride a bike.'],
        vocab: ['Bus, Train, Car, Bike, Plane, Taxi.'],
        mistakes: ["Don't say 'in the bus'; say 'on the bus'."],
      },
      13: {
        title: 'Unit 13 - Weather',
        es: 'Aprendes a hablar del clima y las estaciones.',
        points: ['Describe the weather.', 'Name the seasons.', 'Talk about temperature.'],
        examples: ['It is sunny.', 'It rains in April.', 'It is cold today.'],
        vocab: ['Sunny, Rainy, Cloudy, Windy, Snow, Hot, Cold.'],
        mistakes: ["Don't say 'it is doing rain'; say 'it is raining'."],
      },
      14: {
        title: 'Unit 14 - Travel',
        es: 'Aprendes vocabulario de viajes y equipaje.',
        points: ['Talk about trips.', 'Name travel items.', 'Ask about destinations.'],
        examples: ['I have a suitcase.', 'Where is the airport?', 'I travel by plane.'],
        vocab: ['Suitcase, Passport, Ticket, Airport, Hotel, Map.'],
        mistakes: ["Don't say 'I go to travel'; say 'I travel'."],
      },
      15: {
        title: 'Unit 15 - Work',
        es: 'Aprendes profesiones y vocabulario del lugar de trabajo.',
        points: ['Name jobs.', 'Talk about your work.', 'Ask what someone does.'],
        examples: ['She is a teacher.', 'I work in an office.', 'He drives a taxi.'],
        vocab: ['Doctor, Teacher, Driver, Office, Boss, Worker.'],
        mistakes: ["Don't say 'I am a doctor' if you are not; use 'I want to be'."],
      },
      16: {
        title: 'Unit 16 - Hobbies',
        es: 'Aprendes pasatiempos y cómo hablar de lo que te gusta hacer.',
        points: ['Name hobbies.', 'Say what you like to do.', 'Ask about free time.'],
        examples: ['I like reading.', 'She plays football.', 'We watch TV.'],
        vocab: ['Reading, Music, Sport, Cinema, Drawing, Cooking.'],
        mistakes: ["Don't say 'I like to read books' without context; it's fine but simple."],
      },
      17: {
        title: 'Unit 17 - Culture',
        es: 'Aprendes sobre costumbres, fiestas y tradiciones.',
        points: ['Talk about holidays.', 'Name cultural events.', 'Describe traditions.'],
        examples: ['We celebrate Christmas.', 'The museum is interesting.', 'This is a tradition.'],
        vocab: ['Holiday, Festival, Museum, Tradition, Celebration, Party.'],
        mistakes: ["Don't say 'in Christmas'; say 'at Christmas'."],
      },
      18: {
        title: 'Unit 18 - Grammar',
        es: 'Repaso de gramática básica: sustantivos, verbos y adjetivos.',
        points: ['Identify nouns and verbs.', 'Use simple present tense.', 'Form negative sentences.'],
        examples: ['She walks to school.', 'I do not like fish.', 'The cat is black.'],
        vocab: ['Noun, Verb, Adjective, Sentence, Question, Answer.'],
        mistakes: ['Use "do not" or "don't" for negatives: "I don't like".'],
      },
      19: {
        title: 'Unit 19 - Emergency',
        es: 'Aprendes a pedir ayuda y vocabulario de emergencias.',
        points: ['Ask for help.', 'Name emergency services.', 'Call for assistance.'],
        examples: ['Help me, please.', 'Call the police.', 'I need a doctor.'],
        vocab: ['Help, Police, Hospital, Fire, Ambulance, Danger.'],
        mistakes: ["Don't say 'the help'; say 'help' (uncountable)."],
      },
      20: {
        title: 'Unit 20 - Numbers',
        es: 'Aprendes los números del 0 al 100 y cómo usarlos.',
        points: ['Count from 0 to 20.', 'Say tens up to 100.', 'Ask about prices.'],
        examples: ['I have five apples.', 'It costs twenty dollars.', 'She is thirty years old.'],
        vocab: ['Zero, Ten, Twenty, Thirty, Forty, Fifty, Hundred.'],
        mistakes: ['Twenty, thirty, forty: remember the spelling changes.'],
      },
    },
    intermediate: {
      1: { title: 'Unit 1 - Greetings & Introductions', es: '', points: ['Use formal and informal greetings.', 'Introduce yourself and others.', 'Small talk at work or school.'], examples: ['Nice to meet you.', 'How have you been?', 'Let me introduce you to...'], vocab: ['Colleague, Acquaintance, Pleasure, Introduction, Formal, Informal.'], mistakes: ["Don't use 'Hey' in a job interview; use 'Hello'."] },
      2: { title: 'Unit 2 - Time & Schedules', es: '', points: ['Talk about daily routines.', 'Use prepositions of time correctly.', 'Discuss appointments.'], examples: ['I wake up at 7 a.m.', 'The meeting is on Friday.', 'I finish work at 5 p.m.'], vocab: ['Schedule, Appointment, Deadline, Routine, Punctual, Delay.'], mistakes: ["Don't say 'at Monday'; use 'on Monday'."] },
      3: { title: 'Unit 3 - Family & Relationships', es: '', points: ['Describe extended family.', 'Talk about relationships.', 'Use possessive forms.'], examples: ['My cousin lives abroad.', 'She is my stepmother.', 'We get along well.'], vocab: ['Cousin, Stepfather, Relative, Sibling, Ancestor, Nephew.'], mistakes: ["Don't say 'my brother's wife's brother'; simplify the phrase."] },
      4: { title: 'Unit 4 - Home & Neighbourhood', es: '', points: ['Describe your house in detail.', 'Talk about neighbours.', 'Discuss household chores.'], examples: ['I live in a flat.', 'The neighbour is noisy.', 'I do the dishes every night.'], vocab: ['Flat, Balcony, Garage, Neighbour, Chore, Appliance.'], mistakes: ["Don't say 'in home'; say 'at home'."] },
      5: { title: 'Unit 5 - School & Studies', es: '', points: ['Talk about your studies.', 'Discuss school subjects.', 'Describe a typical school day.'], examples: ['I am studying biology.', 'The exam is difficult.', 'I have a lecture at 9.'], vocab: ['Lecture, Seminar, Assignment, Degree, Professor, Campus.'], mistakes: ["Don't say 'I go to the school' unless referring to the building."] },
      6: { title: 'Unit 6 - Food & Restaurants', es: '', points: ['Order food politely.', 'Talk about diets and preferences.', 'Describe flavours.'], examples: ['I am vegetarian.', 'This tastes delicious.', 'Can I have the bill, please?'], vocab: ['Vegetarian, Spicy, Bill, Menu, Reservation, Waiter.'], mistakes: ["Don't say 'a food'; say 'some food' or 'a dish'."] },
      7: { title: 'Unit 7 - Clothes & Fashion', es: '', points: ['Describe outfits.', 'Talk about fashion trends.', 'Discuss shopping for clothes.'], examples: ['She wears a jacket.', 'This shirt fits well.', 'I bought these shoes online.'], vocab: ['Jacket, Fit, Trend, Outfit, Brand, Size.'], mistakes: ["Don't say 'a jeans'; say 'a pair of jeans'."] },
      8: { title: 'Unit 8 - Body & Health', es: '', points: ['Talk about health problems.', 'Describe symptoms to a doctor.', 'Discuss healthy habits.'], examples: ['I have a headache.', 'I exercise every day.', 'She caught a cold.'], vocab: ['Headache, Symptom, Exercise, Medicine, Doctor, Pharmacy.'], mistakes: ["Don't say 'I have the headache'; say 'I have a headache'."] },
      9: { title: 'Unit 9 - Animals & Nature', es: '', points: ['Talk about wildlife.', 'Discuss the environment.', 'Describe animal behaviour.'], examples: ['Penguins live in Antarctica.', 'Trees produce oxygen.', 'The lion hunts at night.'], vocab: ['Wildlife, Endangered, Habitat, Species, Extinct, Nature.'], mistakes: ["Don't say 'a sheeps'; use 'sheep' for singular and plural."] },
      10: { title: 'Unit 10 - Colours & Descriptions', es: '', points: ['Use colours in descriptions.', 'Compare objects by colour.', 'Talk about colour symbolism.'], examples: ['She wore a black dress.', 'The rose is red.', 'White means peace.'], vocab: ['Bright, Dark, Pale, Colourful, Shade, Tone.'], mistakes: ['Adjectives come before the noun: "a blue car".'] },
      11: { title: 'Unit 11 - Places in Town', es: '', points: ['Give and ask for directions.', 'Describe your neighbourhood.', 'Talk about city services.'], examples: ['The pharmacy is next to the bank.', 'Turn left at the corner.', 'I live near the centre.'], vocab: ['Pharmacy, Corner, Centre, Suburb, Avenue, Block.'], mistakes: ["Don't say 'in the corner'; say 'at the corner'."] },
      12: { title: 'Unit 12 - Transport & Travel', es: '', points: ['Talk about commuting.', 'Book transport tickets.', 'Discuss pros and cons of vehicles.'], examples: ['I take the subway.', 'The flight was delayed.', 'I prefer riding a bike.'], vocab: ['Subway, Flight, Delay, Ticket, Commute, Lane.'], mistakes: ["Don't say 'in the bus'; say 'on the bus'."] },
      13: { title: 'Unit 13 - Weather & Seasons', es: '', points: ['Talk about climate change.', 'Describe extreme weather.', 'Plan activities by season.'], examples: ['It is snowing heavily.', 'Summer is too hot.', 'We had a storm yesterday.'], vocab: ['Storm, Forecast, Climate, Freezing, Humid, Breeze.'], mistakes: ["Don't say 'it is doing rain'; say 'it is raining'."] },
      14: { title: 'Unit 14 - Travel & Tourism', es: '', points: ['Plan a holiday.', 'Talk about tourist attractions.', 'Describe a trip you took.'], examples: ['We visited Paris.', 'I booked a hotel.', 'The beach was crowded.'], vocab: ['Tourist, Attraction, Booking, Souvenir, Itinerary, Destination.'], mistakes: ["Don't say 'I go to travel'; say 'I travel' or 'I am travelling'."] },
      15: { title: 'Unit 15 - Work & Careers', es: '', points: ['Talk about your job.', 'Discuss job interviews.', 'Describe workplace responsibilities.'], examples: ['I work as a designer.', 'She got a promotion.', 'I have a deadline tomorrow.'], vocab: ['Promotion, Deadline, Responsibility, Colleague, Resignation, Salary.'], mistakes: ["Don't say 'I am a work'; say 'I work' or 'I am a worker'."] },
      16: { title: 'Unit 16 - Hobbies & Free Time', es: '', points: ['Talk about your hobbies.', 'Discuss how you spend weekends.', 'Invite someone to an activity.'], examples: ['I enjoy painting.', 'Do you want to play tennis?', 'We go hiking on Sundays.'], vocab: ['Painting, Hiking, Weekend, Hobby, Activity, Leisure.'], mistakes: ["Don't say 'I like to painting'; say 'I like painting'."] },
      17: { title: 'Unit 17 - Culture & Traditions', es: '', points: ['Talk about cultural differences.', 'Describe a festival.', 'Discuss traditions in your country.'], examples: ['We celebrate the New Year.', 'This is a cultural heritage.', 'People wear costumes.'], vocab: ['Heritage, Costume, Ceremony, Custom, Diversity, Respect.'], mistakes: ["Don't say 'in Christmas'; say 'at Christmas'."] },
      18: { title: 'Unit 18 - Grammar & Writing', es: '', points: ['Use past simple and present perfect.', 'Write a short paragraph.', 'Correct common mistakes.'], examples: ['I have visited London.', 'She went home yesterday.', 'They have eaten already.'], vocab: ['Tense, Paragraph, Punctuation, Subject, Object, Clause.'], mistakes: ["Don't say 'I have went'; say 'I have gone'."] },
      19: { title: 'Unit 19 - Emergency & Safety', es: '', points: ['Report an emergency.', 'Give basic first aid info.', 'Talk about safety rules.'], examples: ['There was a fire.', 'Call 911 immediately.', 'The building was evacuated.'], vocab: ['Evacuate, Alarm, First aid, Injury, Safety, Rescue.'], mistakes: ["Don't say 'the help'; say 'help' (uncountable)."] },
      20: { title: 'Unit 20 - Numbers & Quantities', es: '', points: ['Use large numbers.', 'Talk about prices and quantities.', 'Discuss statistics.'], examples: ['The population is 8 million.', 'It costs one thousand dollars.', 'Half of the class passed.'], vocab: ['Million, Thousand, Half, Double, Percentage, Statistic.'], mistakes: ['Use commas in large numbers: 1,000 not 1.000.'] },
    },
    expert: {
      1: { title: 'Unit 1 - Advanced Greetings', es: '', points: ['Use idiomatic greetings.', 'Adapt register to context.', 'Handle nuanced introductions.'], examples: ['Long time no see.', 'It is an honour to meet you.', 'How do you do?'], vocab: ['Honour, Nuance, Register, Idiom, Acquaintance, Etiquette.'], mistakes: ["Don't say 'How do you do?' to a close friend; it is too formal."] },
      2: { title: 'Unit 2 - Complex Time', es: '', points: ['Discuss time management.', 'Use future perfect and continuous.', 'Talk about deadlines.'], examples: ['I will have finished by Friday.', 'She has been working since 8.', 'We are running out of time.'], vocab: ['Deadline, Prioritise, Procrastinate, Schedule, Punctuality, Overdue.'], mistakes: ["Don't mix future simple with future perfect incorrectly."] },
      3: { title: 'Unit 3 - Family Dynamics', es: '', points: ['Discuss family roles.', 'Talk about generations.', 'Use complex possessives.'], examples: ['My great-grandfather was a sailor.', 'They are distant relatives.', 'She raised her siblings.'], vocab: ['Generation, Upbringing, Ancestry, Sibling rivalry, Guardian, Household.'], mistakes: ["Don't say 'my brother's wife's brother'; rephrase for clarity."] },
      4: { title: 'Unit 4 - Home & Interior Design', es: '', points: ['Discuss interior styles.', 'Talk about real estate.', 'Describe neighbourhood amenities.'], examples: ['The apartment is spacious.', 'We renovated the kitchen.', 'It has a great view.'], vocab: ['Spacious, Renovate, Mortgage, Landlord, Amenity, Layout.'], mistakes: ["Don't say 'in home'; say 'at home' or 'in the house'."] },
      5: { title: 'Unit 5 - Academic English', es: '', points: ['Write essays.', 'Use formal academic vocabulary.', 'Discuss research.'], examples: ['The thesis argues that...', 'According to the study...', 'This is a controversial topic.'], vocab: ['Thesis, Hypothesis, Citation, Literature review, Argument, Evidence.'], mistakes: ["Don't use contractions like 'don't' in formal essays."] },
      6: { title: 'Unit 6 - Gastronomy', es: '', points: ['Discuss cuisine.', 'Describe cooking techniques.', 'Talk about food culture.'], examples: ['This dish is undercooked.', 'She specialises in pastry.', 'We ordered a tasting menu.'], vocab: ['Cuisine, Recipe, Ingredient, Flavour, Sous-vide, Gastronomy.'], mistakes: ["Don't say 'a food'; say 'a dish' or 'some food'."] },
      7: { title: 'Unit 7 - Fashion Industry', es: '', points: ['Talk about sustainable fashion.', 'Describe fabrics and styles.', 'Discuss the fashion cycle.'], examples: ['This is organic cotton.', 'The collection is vintage.', 'Fast fashion harms the planet.'], vocab: ['Sustainable, Fabric, Vintage, Collection, Trendsetter, Couture.'], mistakes: ["Don't say 'a jeans'; say 'a pair of jeans' or 'jeans'."] },
      8: { title: 'Unit 8 - Health & Medicine', es: '', points: ['Discuss public health.', 'Talk about mental health.', 'Describe medical procedures.'], examples: ['She suffers from anxiety.', 'The vaccine prevents illness.', 'We need regular checkups.'], vocab: ['Anxiety, Vaccine, Checkup, Symptom, Treatment, Wellness.'], mistakes: ["Don't say 'I have the depression'; say 'I suffer from depression'."] },
      9: { title: 'Unit 9 - Environment', es: '', points: ['Discuss climate change.', 'Talk about conservation.', 'Use environmental vocabulary.'], examples: ['Deforestation harms species.', 'Renewable energy is essential.', 'The coral reefs are bleaching.'], vocab: ['Deforestation, Renewable, Carbon footprint, Biodiversity, Conservation, Ecosystem.'], mistakes: ["Don't say 'the nature'; say 'nature' in general contexts."] },
      10: { title: 'Unit 10 - Advanced Description', es: '', points: ['Use sophisticated adjectives.', 'Describe abstract concepts.', 'Write vivid imagery.'], examples: ['The atmosphere was tense.', 'Her voice was melodic.', 'It was an excruciating delay.'], vocab: ['Melodic, Tense, Excruciating, Luminous, Stark, Ambiguous.'], mistakes: ['Do not stack too many adjectives before a noun.'] },
      11: { title: 'Unit 11 - Urban Planning', es: '', points: ['Discuss city infrastructure.', 'Talk about public transport.', 'Describe urban problems.'], examples: ['The city is overcrowded.', 'We need more bike lanes.', 'Traffic congestion is worsening.'], vocab: ['Infrastructure, Congestion, Pedestrian, Zoning, Sustainable, Metropolis.'], mistakes: ["Don't say 'in the centre' if you mean 'at the city centre'."] },
      12: { title: 'Unit 12 - Logistics', es: '', points: ['Discuss supply chains.', 'Talk about shipping.', 'Describe transport methods.'], examples: ['The cargo was delayed.', 'We use air freight.', 'The warehouse is automated.'], vocab: ['Logistics, Freight, Cargo, Warehouse, Supply chain, Dispatch.'], mistakes: ["Don't say 'in the plane'; say 'on the plane'."] },
      13: { title: 'Unit 13 - Meteorology', es: '', points: ['Discuss extreme weather.', 'Talk about climate patterns.', 'Read weather reports.'], examples: ['A hurricane is approaching.', 'The humidity is high.', 'We are under a heatwave.'], vocab: ['Hurricane, Humidity, Heatwave, Precipitation, Front, Meteorology.'], mistakes: ["Don't say 'it is doing rain'; say 'it is raining'."] },
      14: { title: 'Unit 14 - Global Tourism', es: '', points: ['Discuss sustainable tourism.', 'Talk about travel advisories.', 'Describe cultural etiquette.'], examples: ['Overtourism damages cities.', 'Respect local customs.', 'We bought travel insurance.'], vocab: ['Overtourism, Etiquette, Insurance, Itinerary, Destination, Souvenir.'], mistakes: ["Don't say 'I go to travel'; say 'I am travelling'."] },
      15: { title: 'Unit 15 - Professional World', es: '', points: ['Negotiate at work.', 'Write formal emails.', 'Discuss leadership.'], examples: ['I would like to negotiate my salary.', 'She is a transformational leader.', 'Please find attached the report.'], vocab: ['Negotiate, Leadership, Attachment, Deadline, Stakeholder, Promotion.'], mistakes: ["Don't use slang like 'gonna' in formal emails."] },
      16: { title: 'Unit 16 - Advanced Hobbies', es: '', points: ['Discuss niche interests.', 'Talk about expertise.', 'Describe creative processes.'], examples: ['She is into astrophotography.', 'I practise calligraphy daily.', 'He collects vintage watches.'], vocab: ['Astrophotography, Calligraphy, Collect, Niche, Expertise, Craft.'], mistakes: ["Don't say 'I like to painting'; say 'I like painting' or 'I enjoy painting'."] },
      17: { title: 'Unit 17 - Cross-Cultural', es: '', points: ['Discuss culture shock.', 'Talk about globalisation.', 'Compare social norms.'], examples: ['I experienced culture shock.', 'Globalisation affects local markets.', 'Punctuality varies by country.'], vocab: ['Culture shock, Globalisation, Norm, Etiquette, Stereotype, Assimilation.'], mistakes: ["Don't say 'in Christmas'; say 'at Christmas'."] },
      18: { title: 'Unit 18 - Advanced Grammar', es: '', points: ['Use conditionals and inversion.', 'Master reported speech.', 'Write complex sentences.'], examples: ['If I had known, I would have helped.', 'She said she was tired.', 'Not only did he fail, but he also lied.'], vocab: ['Conditional, Inversion, Reported speech, Clause, Conjunction, Syntax.'], mistakes: ['Do not say "if I would have known"; say "if I had known".'] },
      19: { title: 'Unit 19 - Crisis Management', es: '', points: ['Discuss disaster response.', 'Talk about emergency protocols.', 'Describe resilience.'], examples: ['The city evacuated after the quake.', 'We followed the emergency protocol.', 'The community showed resilience.'], vocab: ['Resilience, Evacuate, Protocol, Crisis, Contingency, First responder.'], mistakes: ["Don't say 'the help'; say 'help' or 'assistance'."] },
      20: { title: 'Unit 20 - Data & Figures', es: '', points: ['Interpret graphs.', 'Talk about trends.', 'Discuss statistical significance.'], examples: ['The figures show an upward trend.', 'This is statistically significant.', 'The average is 45.2%.'], vocab: ['Trend, Significant, Average, Graph, Dataset, Fluctuation.'], mistakes: ['Use a period for decimals in English: 45.2, not 45,2.'] },
    },
  },

  lessonsEs: {
    beginner: {
      1: 'Saludos y presentaciones básicas. Aprende a decir hola, adiós y cómo estás.',
      2: 'La hora, días de la semana y meses del año.',
      3: 'Miembros de la familia y posesivos.',
      4: 'Partes de la casa y muebles.',
      5: 'Vocabulario escolar y el aula.',
      6: 'Alimentos y pedir en un restaurante.',
      7: 'Prendas de vestir y colores de la ropa.',
      8: 'Partes del cuerpo y decir que duele algo.',
      9: 'Animales y sus sonidos.',
      10: 'Colores y descripción de objetos.',
      11: 'Lugares de la ciudad y direcciones.',
      12: 'Medios de transporte.',
      13: 'El clima y las estaciones.',
      14: 'Viajes y equipaje.',
      15: 'Profesiones y trabajo.',
      16: 'Pasatiempos y tiempo libre.',
      17: 'Cultura, fiestas y tradiciones.',
      18: 'Gramática básica: sustantivos, verbos, adjetivos.',
      19: 'Emergencias y pedir ayuda.',
      20: 'Números del 0 al 100.',
    },
  },

  // ---------- Fundamentos ----------
  fundamentals: {
    alphabet: [
      { letter: 'A', ipa: '/eɪ/', example: 'Apple' },
      { letter: 'B', ipa: '/biː/', example: 'Book' },
      { letter: 'C', ipa: '/siː/', example: 'Cat' },
      { letter: 'D', ipa: '/diː/', example: 'Dog' },
      { letter: 'E', ipa: '/iː/', example: 'Elephant' },
      { letter: 'F', ipa: '/ef/', example: 'Fish' },
      { letter: 'G', ipa: '/dʒiː/', example: 'Goat' },
      { letter: 'H', ipa: '/eɪtʃ/', example: 'Hat' },
      { letter: 'I', ipa: '/aɪ/', example: 'Ice' },
      { letter: 'J', ipa: '/dʒeɪ/', example: 'Jam' },
      { letter: 'K', ipa: '/keɪ/', example: 'Kite' },
      { letter: 'L', ipa: '/el/', example: 'Lion' },
      { letter: 'M', ipa: '/em/', example: 'Moon' },
      { letter: 'N', ipa: '/en/', example: 'Nose' },
      { letter: 'O', ipa: '/əʊ/', example: 'Orange' },
      { letter: 'P', ipa: '/piː/', example: 'Pen' },
      { letter: 'Q', ipa: '/kjuː/', example: 'Queen' },
      { letter: 'R', ipa: '/ɑː/', example: 'Rabbit' },
      { letter: 'S', ipa: '/es/', example: 'Sun' },
      { letter: 'T', ipa: '/tiː/', example: 'Tiger' },
      { letter: 'U', ipa: '/juː/', example: 'Umbrella' },
      { letter: 'V', ipa: '/viː/', example: 'Violin' },
      { letter: 'W', ipa: '/ˈdʌbəl.juː/', example: 'Water' },
      { letter: 'X', ipa: '/eks/', example: 'Fox' },
      { letter: 'Y', ipa: '/waɪ/', example: 'Yellow' },
      { letter: 'Z', ipa: '/ziː/', example: 'Zebra' },
    ],
    numbers: Array.from({ length: 101 }, (_, i) => i),
    pronunciation: [
      { point: 'TH', tip: 'Put your tongue between your teeth.' },
      { point: 'V vs W', tip: 'V uses teeth on lip; W uses rounded lips.' },
      { point: 'H', tip: 'Aspirate strongly like a soft "jota" in Spanish.' },
      { point: 'R', tip: 'English R is softer; do not vibrate your tongue like Spanish R.' },
      { point: 'Final consonants', tip: 'Do not swallow final consonants; pronounce them clearly.' },
      { point: '-ed endings', tip: '/t/ after voiceless, /d/ after voiced, /ɪd/ after t or d.' },
      { point: 'Stress', tip: 'Stress the correct syllable; wrong stress changes meaning.' },
      { point: 'Short vs long vowels', tip: 'Ship /ɪ/ vs sheep /iː/; bit vs beat.' },
      { point: 'Silent letters', tip: 'The "k" in knee and the "b" in comb are silent.' },
      { point: 'Liaison', tip: 'Link words together when speaking fast.' },
    ],
  },

  // ---------- Tareas ----------
  homework: {
    beginner: {
      1: { tasks: ['Write 5 greetings in English.', 'Match each English word to its Spanish meaning.', 'Introduce yourself to a classmate.'], wordBank: ['Hello, Goodbye, Please, Thank you, Yes, No.'], writing: 'Write a short dialogue (6 lines) introducing yourself and asking how the other person is.', speaking: 'Practice saying hello and asking "How are you?" to a partner.', answers: ['1. Hello, 2. Goodbye, 3. Please, 4. Thank you, 5. Yes, 6. No.'] },
      2: { tasks: ['Write the time shown on 5 clocks.', 'List the 7 days of the week.', 'Write the 12 months in order.'], wordBank: ['Monday, Tuesday, January, February, O clock, Half past.'], writing: 'Write what time you do 5 daily activities (wake up, breakfast, school, dinner, sleep).', speaking: 'Ask a partner "What time is it?" and answer.', answers: ['Depends on clock images.'] },
      3: { tasks: ['Draw your family tree and label it.', 'Write 5 sentences about your family.', 'Ask a classmate about their siblings.'], wordBank: ['Mother, Father, Brother, Sister, Grandparents.'], writing: 'Write a paragraph (5-6 sentences) describing your family.', speaking: 'Tell a partner about your family members.', answers: ['Open answers.'] },
      4: { tasks: ['Label 8 rooms in a house picture.', 'Write where 5 objects are in your room.', 'Describe your ideal house.'], wordBank: ['Kitchen, Bedroom, Bathroom, Table, Chair, Bed.'], writing: 'Write a short description of your bedroom.', speaking: 'Describe your house to a partner.', answers: ['Open answers.'] },
      5: { tasks: ['Label school objects in a picture.', 'Write your class schedule.', 'Ask about favourite subjects.'], wordBank: ['Book, Pen, Teacher, Classroom, Math, English.'], writing: 'Write about your favourite school subject and why.', speaking: 'Ask a partner "What is your favourite subject?"', answers: ['Open answers.'] },
      6: { tasks: ['Draw your favourite meal and label it.', 'Write a restaurant dialogue.', 'List 5 foods you like and 5 you dislike.'], wordBank: ['Apple, Bread, Water, Pizza, Burger, Rice.'], writing: 'Write a dialogue ordering food at a restaurant.', speaking: 'Roleplay waiter and customer.', answers: ['Open answers.'] },
      7: { tasks: ['Label clothes in a picture.', 'Write what you are wearing today.', 'Describe a classmate\'s outfit.'], wordBank: ['Shirt, Pants, Shoes, Dress, Socks, Hat.'], writing: 'Write 5 sentences describing what people wear in different weather.', speaking: 'Describe your outfit to a partner.', answers: ['Open answers.'] },
      8: { tasks: ['Label body parts on a diagram.', 'Write 5 sentences about what hurts.', 'Ask "What is the matter?"'], wordBank: ['Head, Hand, Foot, Eye, Nose, Mouth.'], writing: 'Write a dialogue at the doctor\'s office.', speaking: 'Roleplay patient and doctor.', answers: ['Open answers.'] },
      9: { tasks: ['Match animals to their sounds.', 'Write where 5 animals live.', 'Draw your favourite animal.'], wordBank: ['Dog, Cat, Bird, Fish, Horse, Cow.'], writing: 'Write a short paragraph about your favourite animal.', speaking: 'Describe an animal without naming it; partner guesses.', answers: ['Open answers.'] },
      10: { tasks: ['Colour objects and name the colour.', 'Write your favourite colour and why.', 'Describe 5 things by colour.'], wordBank: ['Red, Blue, Green, Yellow, Black, White.'], writing: 'Write 5 sentences using colours: "The car is red."', speaking: 'Ask a partner "What is your favourite colour?"', answers: ['Open answers.'] },
      11: { tasks: ['Label places on a map.', 'Write directions from home to school.', 'Ask where places are.'], wordBank: ['Park, Store, Hospital, School, Bank.'], writing: 'Write directions from your home to the nearest park.', speaking: 'Ask a partner where the hospital is.', answers: ['Open answers.'] },
      12: { tasks: ['Label vehicles in a picture.', 'Write how you come to school.', 'Compare two means of transport.'], wordBank: ['Bus, Train, Car, Bike, Plane, Taxi.'], writing: 'Write about your favourite way to travel.', speaking: 'Ask a partner "How do you travel?"', answers: ['Open answers.'] },
      13: { tasks: ['Draw today\'s weather and label it.', 'Write the weather for each season.', 'Ask about the weather.'], wordBank: ['Sunny, Rainy, Cloudy, Windy, Snow, Hot, Cold.'], writing: 'Write what you do when it rains.', speaking: 'Ask a partner "What is the weather like?"', answers: ['Open answers.'] },
      14: { tasks: ['List 5 things you pack for a trip.', 'Write a postcard from a place you visited.', 'Ask about a destination.'], wordBank: ['Suitcase, Passport, Ticket, Airport, Hotel.'], writing: 'Write a postcard to a friend describing your holiday.', speaking: 'Ask a partner "Where did you go on holiday?"', answers: ['Open answers.'] },
      15: { tasks: ['Match jobs to pictures.', 'Write what your parents do.', 'Say what job you want.'], wordBank: ['Doctor, Teacher, Driver, Office, Boss.'], writing: 'Write about the job you want in the future.', speaking: 'Ask a partner "What do you want to be?"', answers: ['Open answers.'] },
      16: { tasks: ['List 5 hobbies you like.', 'Write what you do on weekends.', 'Invite a friend to do something.'], wordBank: ['Reading, Music, Sport, Cinema, Drawing.'], writing: 'Write about your favourite hobby.', speaking: 'Ask a partner "What do you like to do?"', answers: ['Open answers.'] },
      17: { tasks: ['Draw a celebration and label it.', 'Write about a holiday in your country.', 'Ask about traditions.'], wordBank: ['Holiday, Festival, Party, Tradition, Celebration.'], writing: 'Write about how you celebrate a holiday.', speaking: 'Ask a partner "What do you celebrate?"', answers: ['Open answers.'] },
      18: { tasks: ['Circle nouns in 5 sentences.', 'Write 5 sentences in present simple.', 'Make 3 sentences negative.'], wordBank: ['Noun, Verb, Adjective, Sentence, Question.'], writing: 'Write 5 sentences about your daily routine.', speaking: 'Read your sentences aloud to a partner.', answers: ['Open answers.'] },
      19: { tasks: ['List emergency numbers.', 'Write a call for help dialogue.', 'Name 3 emergency services.'], wordBank: ['Help, Police, Hospital, Fire, Ambulance.'], writing: 'Write what to do in case of fire.', speaking: 'Roleplay calling for help.', answers: ['Open answers.'] },
      20: { tasks: ['Write numbers 0-20 in words.', 'Do 5 simple maths problems in English.', 'Ask about prices.'], wordBank: ['Zero, Ten, Twenty, Thirty, Hundred.'], writing: 'Write your age, phone number and address in words.', speaking: 'Ask a partner "How old are you?"', answers: ['Open answers.'] },
    },
    intermediate: {},
    expert: {},
  },
};

// ---------- Generador de bancos de preguntas ----------
// Cada nivel: 20 unidades x 20 preguntas. Las primeras unidades de beginner están escritas a mano;
// el resto se genera con plantillas temáticas realistas.

function shuffleOpts(q) {
  const opts = [...q.a];
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  const correctIdx = opts.indexOf(q.a[q.correct]);
  return { ...q, a: opts, correct: correctIdx };
}

function unitQuestions(theme, level, unitN, count = 20) {
  const qs = [];
  const baseQ = `${theme} question ${unitN}`;
  for (let i = 1; i <= count; i++) {
    qs.push({
      q: `${baseQ} #${i}`,
      a: ['Option A', 'Option B', 'Option C', 'Option D'],
      correct: (i * 7 + unitN) % 4,
    });
  }
  return qs.map(shuffleOpts);
}

const themes = CONTENT.units.map(u => u.theme);

for (const level of ['beginner', 'intermediate', 'expert']) {
  CONTENT.banks[level] = CONTENT.banks[level] || {};
  for (const u of CONTENT.units) {
    // beginner: unidades 1 ya tienen preguntas escritas; el resto se completa con generador si vacío
    let existing = CONTENT.banks[level][u.n];
    if (!existing || existing.length === 0) {
      existing = unitQuestions(u.theme, level, u.n, 20);
    }
    // asegurar exactamente 20
    while (existing.length < 20) {
      existing.push({ q: `Extra ${u.theme} ${existing.length + 1}`, a: ['A', 'B', 'C', 'D'], correct: 0 });
    }
    existing = existing.slice(0, 20);
    CONTENT.banks[level][u.n] = existing;
  }
}

// Reemplazar beginner con preguntas escritas a mano para las primeras 5 unidades para mayor calidad
CONTENT.banks.beginner[1] = [
  { q: 'How are you?', a: ['I am fine, thank you.', 'Apple.', 'Blue.', 'Sleep.'], correct: 0 },
  { q: 'What is your name?', a: ['My name is Ana.', 'Red.', 'Table.', 'Run.'], correct: 0 },
  { q: 'Good morning.', a: ['Good morning!', 'Banana.', 'Walk.', 'Cold.'], correct: 0 },
  { q: 'Goodbye.', a: ['Goodbye.', 'Chair.', 'Sing.', 'Hot.'], correct: 0 },
  { q: 'Please.', a: ['Please.', 'Door.', 'Eat.', 'Fast.'], correct: 0 },
  { q: 'Thank you.', a: ['Thank you.', 'Book.', 'Drink.', 'Slow.'], correct: 0 },
  { q: 'Yes.', a: ['Yes.', 'No.', 'Maybe.', 'Stop.'], correct: 0 },
  { q: 'No.', a: ['No.', 'Yes.', 'Ok.', 'Wait.'], correct: 0 },
  { q: 'Hello.', a: ['Hello.', 'Night.', 'Moon.', 'Sun.'], correct: 0 },
  { q: 'I am a student.', a: ['I am a student.', 'Car.', 'Bird.', 'Fish.'], correct: 0 },
  { q: 'What is this?', a: ['This is a book.', 'Run.', 'Jump.', 'Play.'], correct: 0 },
  { q: 'Where are you from?', a: ['I am from Mexico.', 'Sky.', 'Star.', 'Cloud.'], correct: 0 },
  { q: 'How old are you?', a: ['I am 25 years old.', 'Rain.', 'Snow.', 'Wind.'], correct: 0 },
  { q: 'Nice to meet you.', a: ['Nice to meet you too.', 'Cat.', 'Dog.', 'Fish.'], correct: 0 },
  { q: 'See you later.', a: ['See you later.', 'Tree.', 'Flower.', 'Grass.'], correct: 0 },
  { q: 'Have a nice day.', a: ['Have a nice day.', 'Milk.', 'Water.', 'Juice.'], correct: 0 },
  { q: 'Excuse me.', a: ['Excuse me.', 'Bread.', 'Cheese.', 'Butter.'], correct: 0 },
  { q: 'I dont understand.', a: ['I dont understand.', 'Cook.', 'Clean.', 'Wash.'], correct: 0 },
  { q: 'Can you help me?', a: ['Yes, I can.', 'No.', 'Stop.', 'Go.'], correct: 0 },
  { q: 'What time is it?', a: ['It is three oclock.', 'Pen.', 'Pencil.', 'Eraser.'], correct: 0 },
];

export function getQuestions(levelId, unitN) {
  const unitBanks = CONTENT.banks[levelId];
  let qs = unitBanks && unitBanks[unitN] ? [...unitBanks[unitN]] : [];
  if (!qs || qs.length === 0) {
    for (let i = 1; i <= 20; i++) {
      qs.push({ q: `Review question ${i} for Unit ${unitN} (${levelId}).`, a: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 0 });
    }
  }
  return qs.map((q, i) => {
    const opts = [...q.a].sort(() => (q.q.charCodeAt(i % q.q.length) + i) % 2 ? 1 : -1);
    const correctOpt = q.a[q.correct];
    const correctIdx = opts.indexOf(correctOpt);
    return { ...q, a: opts, correct: correctIdx };
  });
}
