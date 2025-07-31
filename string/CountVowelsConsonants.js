String s = "Hello World";
int vowels = 0, consonants = 0;
for (char ch : s.toLowerCase().toCharArray()) {
    if (ch >= 'a' && ch <= 'z') {
        if ("aeiou".indexOf(ch) >= 0) vowels++;
        else consonants++;
    }
}
System.out.println("Vowels: " + vowels); // Vowels: 3
System.out.println("Consonants: " + consonants); // Consonants: