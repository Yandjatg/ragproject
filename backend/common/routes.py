from users.userViews import UserviewSet
from actualites.views import ActualiteviewSet
from diasporas.views import DiasporaviewSet
from innovations.views import InnovationviewSet
from interviews.views import InterviewviewSet
from politiques.views import PolitiqueviewSet
from portrait.views import PortraitviewSet
from startups.views import StartupviewSet
routes = [
    {'regex': r'rag/users', 'viewset': UserviewSet, 'basename': 'Rag'},
    {'regex': r'rag/diasporas', 'viewset': DiasporaviewSet, 'basename': 'Rag'},
    {'regex': r'rag/innovations', 'viewset': InnovationviewSet, 'basename': 'Rag'},
    {'regex': r'rag/interviews', 'viewset': InterviewviewSet, 'basename': 'Rag'},
    {'regex': r'rag/politiques', 'viewset': PolitiqueviewSet, 'basename': 'Rag'},
    {'regex': r'rag/portraits', 'viewset': PortraitviewSet, 'basename': 'Rag'},
    {'regex': r'rag/startups', 'viewset': StartupviewSet, 'basename': 'Rag'},
    {'regex': r'rag/actualites', 'viewset': ActualiteviewSet, 'basename': 'Rag'},

]
