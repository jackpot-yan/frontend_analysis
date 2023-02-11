from PyQt5.QtCore import QUrl, pyqtSlot
from PyQt5.QtWidgets import QWidget, QVBoxLayout, QDesktopWidget
from PyQt5.QtWebEngineWidgets import QWebEngineView, QWebEngineProfile, QWebEngineScript


class Browser(QWidget):
    def __init__(self):
        super().__init__()
        self.webview = None
        self.init_browser()
        self.profile = QWebEngineProfile.defaultProfile()
        self.script = QWebEngineScript()
        self.prepare_script()

    def init_browser(self):
        self.webview = QWebEngineView()
        layout = QVBoxLayout(self)
        layout.addWidget(self.webview)
        self.showMaximized()
        self.center()
        self.show()

    def center(self):
        qr = self.frameGeometry()
        cp = QDesktopWidget().availableGeometry().center()
        qr.moveCenter(cp)
        self.move(qr.topLeft())

    @pyqtSlot()
    def load_url(self, url: str):
        pass

    def prepare_script(self):
        script_path = '../scripts/inject.js'
        self.profile.scripts().insert(self.script)
        with open(script_path, 'r', encoding='utf-8') as file:
            self.script.setSourceCode(file.read())
        self.profile.scripts().insert(self.script)
