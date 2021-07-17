import click
import json
import datetime

def run(ips, op):

    years = []

    total_data = {}
    for ip in ips:
        f = open(ip)
        # returns JSON object as 
        # a dictionary
        data = json.load(f)
        for d in data:
            date = datetime.datetime.strptime(d["date"],"%Y-%m-%dT%H:%M:%S.%fZ").strftime('%m/%d/%Y')
            year = datetime.datetime.strptime(d["date"],"%Y-%m-%dT%H:%M:%S.%fZ").strftime('%Y')
            if year not in years:
                years.append(year)
            if date not in total_data:
                total_data[date] = 0
            total_data[date] = int(d["killed"]) + total_data[date]
            print(date, total_data[date], d["killed"])
        f.close()

    print(years)
    for year in years:
        start_date = datetime.date(int(year), 1, 1)
        end_date = datetime.date(int(year), 12, 31)
        delta = datetime.timedelta(days=1)
        while start_date <= end_date:
            date_str = start_date.strftime('%m/%d/%Y')
            print(date_str)
            if date_str not in total_data:
                total_data[date_str] = 0
            start_date += delta

    print(len(total_data.keys()))

    with open(op, 'w') as f:
        json.dump(total_data, f)


@click.command()
@click.option(
    '--ip',
    required=True,
    help='List of json files',
    multiple=True
)
@click.option(
    '--op',
    required=True,
    help='Name of output json file (exclude .json).'
)
def cli(ip, op):
    run(ip, op)
    for x in ip:
        click.echo(f'Reading file: {x}!')