import opengrid as og
from opengrid import datasets

df = datasets.get('gas_dec2016_min')

# we only want to demo on one sensor
ts = df['313b'].head(100)

# ### We want to count the number of times the gas boiler switches on in this period

og.analysis.count_peaks(ts)
