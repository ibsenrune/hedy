import hedy
import textwrap
from test_level_01 import HedyTester


class TestsTranslationLevel3(HedyTester):
    level = 1
    keywords_from = hedy.keywords_to_dict('en')
    keywords_to = hedy.keywords_to_dict('nl')

    def test_print(self):
        result = hedy.translate_keywords(f"{self.keywords_from['print']} Hallo welkom bij Hedy!", "en", "nl", self.level)
        expected = f"{self.keywords_to['print']} Hallo welkom bij Hedy!"

        self.assertEqual(result, expected)

    def test_print_multiple_lines(self):
        result = hedy.translate_keywords(f"{self.keywords_from['print']} Hallo welkom bij Hedy!\n{self.keywords_from['print']} veel plezier", "en", "nl", self.level)
        expected = f"{self.keywords_to['print']} Hallo welkom bij Hedy!\n{self.keywords_to['print']} veel plezier"

        self.assertEqual(result, expected)

    def test_print_kewords(self):
        result = hedy.translate_keywords(f"{self.keywords_from['print']} print ask echo", "en", "nl", self.level)
        expected = f"{self.keywords_to['print']} print ask echo"

    def test_ask(self):
        result = hedy.translate_keywords(f"{self.keywords_from['ask']} Hallo welkom bij Hedy!", "en", "nl", self.level)
        expected = f"{self.keywords_to['ask']} Hallo welkom bij Hedy!"

        self.assertEqual(result, expected)

    def test_ask_multiple_lines(self):
        result = hedy.translate_keywords(f"{self.keywords_from['ask']} Hallo welkom bij Hedy!\n{self.keywords_from['ask']} veel plezier", "en", "nl", self.level)
        expected = f"{self.keywords_to['ask']} Hallo welkom bij Hedy!\n{self.keywords_to['ask']} veel plezier"

        self.assertEqual(result, expected)

    def test_ask_kewords(self):
        result = hedy.translate_keywords(f"{self.keywords_from['ask']} print ask echo", "en", "nl", self.level)
        expected = f"{self.keywords_to['ask']} print ask echo"

    def test_echo(self):
        result = hedy.translate_keywords(f"{self.keywords_from['ask']} Hallo welkom bij Hedy!\n{self.keywords_from['echo']}", "en", "nl", self.level)
        expected = f"{self.keywords_to['ask']} Hallo welkom bij Hedy!\n{self.keywords_to['echo']}"

        self.assertEqual(result, expected)

    def test_echo_text(self):
        result = hedy.translate_keywords(f"{self.keywords_from['ask']} stel je vraag\n{self.keywords_from['echo']} tekst", "en", "nl", self.level)
        expected = f"{self.keywords_to['ask']} stel je vraag\n{self.keywords_to['echo']} tekst"

        self.assertEqual(result, expected)

    def test_forward(self):
        result = hedy.translate_keywords(f"{self.keywords_from['forward']} 50", "en", "nl", self.level)
        expected = f"{self.keywords_to['forward']} 50"

        self.assertEqual(result, expected)

    def test_turn(self):
        result = hedy.translate_keywords(f"{self.keywords_from['turn']} left", "en", "nl", self.level)
        expected = f"{self.keywords_to['turn']} left"

        self.assertEqual(result, expected)

    def test_turn_value(self):
        result = hedy.translate_keywords(f"{self.keywords_from['turn']} 50", "en", "nl", self.level)
        expected = f"{self.keywords_to['turn']} 50"

        self.assertEqual(result, expected)

    def test_invalid(self):
        result = hedy.translate_keywords(f"hallo", "en", "nl", self.level)
        expected = f"hallo"

        self.assertEqual(result, expected)

    # No translation because of the invalid space error
    def test_invalid_space(self):
        result = hedy.translate_keywords(f" {self.keywords_from['print']} Hedy", "en", "nl", self.level)
        expected = f" {self.keywords_from['print']} Hedy"

        self.assertEqual(result, expected)

    def no_argument_ask(self):
        result = hedy.translate_keywords(f"{self.keywords_to['ask']}", "en", "nl", self.level)
        expected = f"{self.keywords_to['ask']}"

        self.assertEqual(result, expected)