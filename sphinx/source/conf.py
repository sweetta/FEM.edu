# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'FEM.edu'
copyright = '2023, Peter Mackenzie-Helnwein'
author = 'Peter Mackenzie-Helnwein'
release = 'FEM.edu-v0.9-pre3.8.23'

# -- add current folder to path
# https://www.jetbrains.com/pycharm/guide/tutorials/sphinx_sites/documentation/
import os
import sys
# sys.path.insert(0, os.path.abspath("../../src/elements"))
# sys.path.insert(0, os.path.abspath("../../src/materials"))
# sys.path.insert(0, os.path.abspath("../../src/solver"))
sys.path.insert(0, os.path.abspath("../../src"))
sys.path.insert(0, os.path.abspath("."))


# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'sphinx.ext.autosectionlabel',
    "myst_parser",
    "sphinx.ext.autodoc",
    ]

extensions += ['sphinx_git']
extensions += ['sphinx_substitution_extensions']
extensions += ['sphinx_gallery.gen_gallery']

templates_path = ['_templates']
exclude_patterns = []

autosectionlabel_prefix_document = True
autosectionlabel_maxdepth = 6

# -- Sphinx-Gallery configuration
sphinx_gallery_conf = {
     'examples_dirs': '../../src/femedu/examples',   # path to your example scripts
     'gallery_dirs': 'auto_examples',  # path to where to save gallery generated output
}



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']

# define global abbreviations
rst_prolog = """
.. |PackageName|  replace:: **FEM.edu**
.. |Author|   replace:: Peter Mackenzie-Helnwein
"""
