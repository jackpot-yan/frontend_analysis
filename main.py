import sys
from PyQt5.QtWidgets import QApplication
from src.ui.browser import Browser


def main():
    app = QApplication(sys.argv)
    browser = Browser()
    sys.exit(app.exec_())


if __name__ == '__main__':
    main()
