import eel
from pyowm import OWM
from pyowm.utils import config as cfg
from pyowm.utils import timestamps



eel.init("web")
eel.start("main.html",size = (700,700))