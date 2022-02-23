import re
import sys


PACKAGE_REGEX = r"^[_a-zA-Z][\-_a-zA-Z0-9]+$"
MODULE_REGEX = r"^[_a-zA-Z][_a-zA-Z0-9]+$"

module_name = "{{ cookiecutter.app_name }}"

if not re.match(MODULE_REGEX, module_name):
    msg = (
        "ERROR: The module name '{}' is not a valid Python module name. "
        "Please do not use a '-' character and use '_' instead."
    )
    print(msg.format(module_name))

    # Exit to cancel project
    sys.exit(1)
